import DataRepository from './DataRepository';
import { Portfolio } from './types';

import './style.css';
import LoadingScreen from './components/LoadingScreen';
import ParallaxBgImage from './assets/images/parallax-bg.png';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProgressIndicator from './components/layout/ProgressIndicator';
import ParallaxScroll from './lib/parallax-scroll';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import EducationalBackgrounds from './components/sections/Education';
import { elementsInViewportTransitions } from './lib/viewport-elements-transitions';

import createElement from './helpers/create-element';
import createElementWithText from './helpers/create-text';
import appendChildren from './helpers/append-children';

class App {
	#data: Portfolio;
	#rootContainer: HTMLDivElement;
	#layoutContainer: HTMLDivElement;
	#header: Header;
	#footer: Footer;
	#sectionContainer: HTMLElement;
	#progressIndicator: ProgressIndicator;

	#introSection: Intro;
	#aboutSection: About;
	#skillsSection: Skills;
	#educationSection: EducationalBackgrounds;
	#projectsSection: Projects

	constructor(portfolioData: Portfolio) {
		this.#data = portfolioData;

		// Create portfolio sections as children of section container
		this.#introSection = new Intro();
		this.#aboutSection = new About(this.#data.profile);
		this.#skillsSection = new Skills({ skills: this.#data.skillset });
		this.#projectsSection = new Projects({ projects: this.#data.projects });
		this.#educationSection = new EducationalBackgrounds({
			educationalBackgrounds: this.#data.educationalBackgrounds
		});

		// Create instances of main layout components
		this.#sectionContainer = createElement('main', {
			attributes: {
				class: [
					'min-h-screen',
					'h-max',
					'max-w-screen-2xl',
					'w-full',
					'px-6',
					'pb-12',
					'sm:px-12',
					'sm:pb-24',
					'md:px-24',
					'md:pb-36',
					'lg:px-36',
					'lg:pb-48',
					'z-10',
					'mx-auto',
				]
			},
			children: [
				this.#introSection.getRootElement(),
				this.#aboutSection.getRootElement(),
				this.#skillsSection.getRootElement(),
				this.#projectsSection.getRootElement(),
				this.#educationSection.getRootElement()
			]
		});
		this.#header = new Header();
		this.#footer = new Footer({
			githubUrl: this.#data.profile.socialMediaLinks.find(s => s.platform === 'Github').url
		});

		this.#layoutContainer = createElement('div', {
			attributes: {
				class: [
					'main-content',
					'flex',
					'flex-col',
					'min-h-screen',
					'h-max',
					'overflow-hidden',
				]
			},
			children: [
				this.#header.getRootElement(),
				this.#sectionContainer,
				this.#footer.getRootElement()
			]
		});

		const parallaxElement = new ParallaxScroll({
			containerBgColor: 'bg-midnight',
			contentElement: this.#layoutContainer,
			backgroundUrl: ParallaxBgImage
		});

		this.#rootContainer = createElement('div', {
			children: [parallaxElement.getRootElement()]
		});

		this.#sectionContainer.classList.add(
		);
	}

	public appendProgressIndicator() {
		this.#progressIndicator = new ProgressIndicator({
			sections: [
				this.#introSection.getRootElement(),
				this.#aboutSection.getRootElement(),
				this.#skillsSection.getRootElement(),
				this.#projectsSection.getRootElement(),
				this.#educationSection.getRootElement(),
			]
		});
		appendChildren(this.#layoutContainer, [this.#progressIndicator.getElement()]);
	}

	public getRootElement = (): HTMLDivElement => this.#rootContainer;
}

const dataRepo = DataRepository.getInstance();
(async () => {
	// Append loading screen component
	const loading = new LoadingScreen();
	document.body.appendChild(loading.getElement());
	try {
		// Fetch the portfolio data
		await dataRepo.fetchPortfolioData();

		// Remove loading screen if fetching process is successful
		document.body.removeChild(document.body.firstElementChild);

		// Create instance of app and pass the data
		const app = new App(dataRepo.getData());
		document.body.appendChild(app.getRootElement());
		app.appendProgressIndicator();

		// Activate viewport elements transitions
		elementsInViewportTransitions({
			transitionName: 'viewport-element-transition',
			threshold: 0.40,
			prioritizedClassNames: 'progress-indicator'
		});
	} catch (error) {
		console.log(error);
		// If fetching process failed, display error screen
		loading.displayError(error.message);
	}
})()

