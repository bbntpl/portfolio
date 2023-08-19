import { Project } from './index.types';

type ProjectsInstanceArgs = {
	projects: Array<Project>
}

export default class Projects {
	#portfolioSection: HTMLElement;
	#sectionName: HTMLHeadingElement;
	#container: HTMLDivElement;
	#projectGrids: HTMLDivElement;
	#secondaryProjectListLinkWrapper: HTMLDivElement;
	#secondaryProjectListLink: HTMLAnchorElement;

	constructor({ projects }: ProjectsInstanceArgs) {
		this.#portfolioSection = document.createElement('section');
		this.#sectionName = document.createElement('h1');
		this.#sectionName.textContent = 'Projects';
		this.#container = document.createElement('div');
		this.#projectGrids = document.createElement('div');
		this.#secondaryProjectListLinkWrapper = document.createElement('div');
		this.#secondaryProjectListLink = document.createElement('a');
		this.#secondaryProjectListLink.textContent = 'VIEW OTHER WEB DEV PROJECTS'
		this.#secondaryProjectListLink.href = 'https://github.com/stars/bvrbryn445/lists/my-webdev-projects-2';
		this.#secondaryProjectListLink.target = '_blank';

		this.#portfolioSection.appendChild(this.#sectionName);
		this.#portfolioSection.appendChild(this.#container);
		this.#container.appendChild(this.#projectGrids);
		this.#container.appendChild(this.#secondaryProjectListLinkWrapper);
		this.#secondaryProjectListLinkWrapper.appendChild(this.#secondaryProjectListLink);

		for (const project of projects) {
			this.#container.appendChild(this.createProjectEl(project))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
		this.#container.classList.add(
			'flex',
			'flex-row',
			'justify-center',
			'font-sans'
		);
		this.#secondaryProjectListLinkWrapper.classList.add(
			'bg-bluemine-300',
			'text-sm',
			'text-semibold',
			'text-midnight',
			'hover:bg-bluemine-200',
			'py-2',
		)
		this.#secondaryProjectListLink.classList.add(
			'px-4',
			'py-2',
			'top-0',
			'bottom-0',
		)
	}

	private createProjectEl(project: Project): HTMLDivElement {
		const projectEl = document.createElement('div');
		console.log(project);

		return projectEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}