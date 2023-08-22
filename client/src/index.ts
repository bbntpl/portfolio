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

		this.#rootContainer = document.createElement('div');

		this.#layoutContainer = document.createElement('div');
		this.#layoutContainer.className = 'main-content';

		// Create instances of main layout components
		this.#sectionContainer = document.createElement('main');
		this.#header = new Header();
		this.#footer = new Footer({
			githubLink: this.#data.profile.socialMediaLinks.find(s => s.platform === 'Github').url
		});

		// Append main layout components
		this.#layoutContainer.appendChild(this.#header.getRootElement());
		this.#layoutContainer.appendChild(this.#sectionContainer);
		this.#layoutContainer.appendChild(this.#footer.getRootElement());

		// Create and append portfolio sections as children of section container
		this.#introSection = new Intro();
		this.#aboutSection = new About(this.#data.profile);
		this.#skillsSection = new Skills({ skills: this.#data.skillset });
		this.#projectsSection = new Projects({ projects: this.#data.projects });
		this.#educationSection = new EducationalBackgrounds({
			educationalBackgrounds: this.#data.educationalBackgrounds
		});
		this.#progressIndicator = new ProgressIndicator({
			sections: [
				this.#introSection.getRootElement(),
				this.#aboutSection.getRootElement(),
				this.#skillsSection.getRootElement(),
				this.#projectsSection.getRootElement(),
				this.#educationSection.getRootElement(),
			]
		});

		this.#layoutContainer.appendChild(this.#progressIndicator.getElement());
		this.#sectionContainer.appendChild(this.#introSection.getRootElement());
		this.#sectionContainer.appendChild(this.#aboutSection.getRootElement());
		this.#sectionContainer.appendChild(this.#skillsSection.getRootElement());
		this.#sectionContainer.appendChild(this.#projectsSection.getRootElement());
		this.#sectionContainer.appendChild(this.#educationSection.getRootElement());

		const parallaxElement = new ParallaxScroll({
			containerBgColor: 'bg-midnight',
			contentElement: this.#layoutContainer,
			backgroundUrl: ParallaxBgImage
		});
		this.#rootContainer.appendChild(parallaxElement.getRootElement());

		// Style the layout components including its parent elements
		this.#layoutContainer.classList.add(
			'flex',
			'flex-col',
			'min-h-screen',
			'h-max',
			'overflow-hidden',
		)
		this.#sectionContainer.classList.add(
			'min-h-screen',
			'h-max',
			'max-w-screen-2xl',
			'w-full',
			'px-6',
			'pb-12',
			'sm:px-12',
			'sm:pb-24',
			'lg:px-36',
			'lg:pb-48',
			'md:px-24',
			'md:pb-36',
			'lg:px-36',
			'lg:pb-48',
			'z-10',
			'mx-auto',
		);
	}

	public getRootElement(): HTMLDivElement {
		return this.#rootContainer;
	}
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

		// Activate viewport elements transitions
		elementsInViewportTransitions({
			elementClassName: 'viewport-element-transition',
			threshold: 0.40
		});
	} catch (error) {
		console.log(error);
		// If fetching process failed, display error screen
		loading.displayError(error.message);
	}
})()

