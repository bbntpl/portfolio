import { baseUrl } from './api';
import { Portfolio, TypeResponse } from './types';

// State management TS class which uses singleton design pattern
export default class DataRepository {
	private static instance: DataRepository;

	private portfolioData: Portfolio | null = null

	private constructor() { }

	public static getInstance(): DataRepository {
		if (!DataRepository.instance) {
			DataRepository.instance = new DataRepository();
		}
		return DataRepository.instance;
	}

	public async request<TypeResponse>(
		url: string,
		config: RequestInit = {}
	): Promise<TypeResponse> {
		const response = await fetch(`${baseUrl}${url}`, config);
		return await response.json();
	}

	public async fetchPortfolioData(): Promise<void> {
		try {
			const response: TypeResponse<Portfolio> = await this.request('/api/data');
			if (!response.ok || !response.data) {
				throw Error(response.message);
			}

			this.portfolioData = response.data;
		} catch (error) {
			console.log(error.data);
			throw new Error(error.message || 'Failed to fetch portfolio data.');
		}
	}

	public getData(): Portfolio | null {
		return this.portfolioData;
	}
}