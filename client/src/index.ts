import StateManager from './state';
import { Portfolio } from './types';

class App {
	data: string;
	status: 'idle' | 'pending' | 'success' | 'error';
	containerEl: HTMLElement;

	constructor(helloWorld: string) {
		this.data = helloWorld;
		this.status = 'idle';

		this.state = onChange(state, this.update);

		this.containerEl = document.createElement('div');
		this.containerEl.className = 'main-container';
	}

	update(path, current, previous) {
		console.log(`${path} changed from ${previous} to ${current}`);
	}
}


const state = StateManager.getInstance();
(async () => {
	await state.fetchPortfolioData();
})()

const app = new App(state.getData())
document.body.appendChild(app.containerEl);