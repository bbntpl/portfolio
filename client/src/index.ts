import DataRepository from './DataRepository';
import { Portfolio } from './types';

import './style.css';
import LoadingScreen from './components/LoadingScreen';

class App {
	data: Portfolio;
	containerEl: HTMLElement;

	constructor(portfolioData: Portfolio) {
		this.data = portfolioData;

		this.containerEl = document.createElement('div');
		this.containerEl.className = 'main-container';
		this.containerEl.textContent = this.data.projects.length + '';
	}
}

const dataRepo = DataRepository.getInstance();
(async () => {
	// Append loading screen component
	const loading = new LoadingScreen();
	document.body.appendChild(loading.container);
	try {
		// Fetch the portfolio data
		await dataRepo.fetchPortfolioData();

		// Remove loading screen if fetching process is successful
		document.body.removeChild(document.body.firstElementChild);

		// Create instance of app and pass the data
		const app = new App(dataRepo.getData());
		document.body.appendChild(app.containerEl);

	} catch (error) {
		// If fetching process failed, display error screen
		loading.displayError(error.message);
	}
})()

