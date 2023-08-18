import { Project } from './index.types';

type ProjectsInstanceArgs = {
	projects: Array<Project>
}

export default class Projects {
	#portfolioSection: HTMLElement;
	#sectionName: HTMLHeadingElement;
	#container: HTMLDivElement;

	constructor({ projects }: ProjectsInstanceArgs) {
		this.#portfolioSection = document.createElement('section');
		this.#sectionName = document.createElement('h1');
		this.#sectionName.textContent = 'Projects';
		this.#container = document.createElement('div');

		this.#portfolioSection.appendChild(this.#sectionName);
		this.#portfolioSection.appendChild(this.#container);
		for (const project of projects) {
			this.#container.appendChild(this.createProjectEl(project))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
	}

	private createProjectEl(project: Project): HTMLDivElement {
		const projectEl = document.createElement('div');

		return projectEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}