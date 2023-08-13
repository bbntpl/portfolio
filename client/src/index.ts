import DataRepository from './DataRepository';
import { Portfolio } from './types';

import './style.css';
import LoadingScreen from './components/LoadingScreen';
import ParallaxBgImage from './assets/images/parallax-bg.png';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NavMenu from './components/layout/NavMenu';
import ParallaxScroll from './lib/parallax-scroll';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import EducationalBackgrounds from './components/sections/EducationalBackgrounds';

class App {
	data: Portfolio;
	containerEl: HTMLDivElement;
	root: HTMLDivElement;
	header: Header;
	footer: Footer;
	main: HTMLElement;
	navMenu: NavMenu;

	introSection: Intro;
	aboutSection: About;
	skillsSection: Skills;
	educationSection: EducationalBackgrounds;
	projectsSection: Projects

	constructor(portfolioData: Portfolio) {
		this.data = portfolioData;

		this.root = document.createElement('div');

		this.containerEl = document.createElement('div');
		this.containerEl.className = 'main-content';

		// Create instances of main layout components
		this.header = new Header();
		this.footer = new Footer();
		this.main = document.createElement('main');
		this.navMenu = new NavMenu();

		// Append main layout components
		this.containerEl.appendChild(this.header.getElement());
		this.containerEl.appendChild(this.navMenu.getElement());
		this.containerEl.appendChild(this.main);
		this.containerEl.appendChild(this.footer.getElement());

		// Create and append portfolio sections as a child to main element
		this.introSection = new Intro();
		this.aboutSection = new About(this.data.profile);

		this.main.appendChild(this.introSection.getElement());
		this.main.appendChild(this.aboutSection.getElement());

		const parallaxElement = new ParallaxScroll({
			containerBgColor: 'bg-midnight',
			contentElement: this.containerEl,
			backgroundUrl: ParallaxBgImage
		});
		this.root.appendChild(parallaxElement.getElement());

		// Style the layout components including its parent elements
		this.containerEl.classList.add(
			'flex',
			'flex-col',
			'min-h-screen',
			'h-max',
			'overflow-y-hidden'
		)
		this.main.classList.add(
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
			'mx-auto'
		)
	}

	public getElement(): HTMLDivElement {
		return this.root;
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
		document.body.appendChild(app.getElement());

	} catch (error) {
		console.log(error);
		// If fetching process failed, display error screen
		loading.displayError(error.message);
	}
})()

