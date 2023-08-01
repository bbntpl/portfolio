import { Portfolio, TypeResponse } from './types';

// state management TS class which uses singleton design pattern
export default class StateManager {
	private static instance: StateManager;

	// Bookmarked: change data type to Portfolio later	
	private portfolioData: string | null = null

	private constructor() { }

	public static getInstance(): StateManager {
		if (!StateManager.instance) {
			StateManager.instance = new StateManager();
		}
		return StateManager.instance;
	}

	public async request<TypeResponse>(
		url: string,
		config: RequestInit = {}
	): Promise<TypeResponse> {
		const response = await fetch(url, config);
		return await response.json();

	}

	public async fetchPortfolioData(): Promise<void> {
		try {
			const response: TypeResponse<string> = await this.request('/data')
			if (!response.ok) {
				throw new Error('Failed to fetch user data');
			}
			this.portfolioData = await response.data;
		} catch (error) {
			console.error('Error:', error.message);
		}
	}

	public getData(): string | null {
		return this.portfolioData;
	}
}