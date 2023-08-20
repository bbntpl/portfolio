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
			this.#projectGrids.appendChild(this.createProjectGridItem(project))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
		this.#container.classList.add(
			'flex',
			'flex-col',
			'items-center',
			'font-sans'
		);
		this.#projectGrids.classList.add(
			'flex',
			'flex-row',
			'flex-wrap',
			'my-12',
			'justify-center'
		)
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
			'bottom-0'
		)
	}

	private createProjectGridItem(project: Project): HTMLDivElement {
		const splitDesc = project.description.split('|');
		const projectTitle = splitDesc[0];
		const projectDesc = splitDesc[1];
		const projectImage = splitDesc[2];

		const rootEl = document.createElement('div');
		const bgImage: HTMLImageElement = new Image();
		bgImage.src = projectImage;
		const projectInfoWrapper = document.createElement('div');

		const titleEl = document.createElement('h3');
		titleEl.textContent = projectTitle;

		const projectLinks = document.createElement('div');
		const repoLinkWrapper = document.createElement('div');
		const websiteLinkWrapper = document.createElement('div');
		const repoLink = document.createElement('a');
		repoLink.textContent = 'visit repo';
		repoLink.href = project.url;
		const websiteLink = document.createElement('a');
		websiteLink.textContent = 'access live demo';
		websiteLink.href = project.url;
		const descriptionEl = document.createElement('p');

		rootEl.appendChild(bgImage);
		rootEl.appendChild(projectInfoWrapper);
		projectInfoWrapper.appendChild(titleEl);
		projectInfoWrapper.appendChild(projectLinks);
		projectLinks.appendChild(repoLinkWrapper);
		projectLinks.appendChild(websiteLinkWrapper);
		repoLinkWrapper.appendChild(repoLink);
		websiteLinkWrapper.appendChild(websiteLink);
		projectInfoWrapper.appendChild(descriptionEl);

		const absoluteWrapperStyles = [
			'absolute',
			'w-full',
			'h-full',
			'top-0',
			'left-0',
		]
		rootEl.classList.add(
			'relative',
			'w-96',
			'h-96'
		);
		bgImage.classList.add(
			...absoluteWrapperStyles,
			'z-15',
			'bg-bottom'
		);
		projectInfoWrapper.classList.add(
			...absoluteWrapperStyles,
			'z-20',
			'flex',
			'flex-col',
			'justify-start',
			'items-center',
			'bg-midnight',
			'opacity-20',
			'bg-blend-lighten',
			'hover:bg-blend-darken'
		);
		projectLinks.classList.add(
			'flex',
			'content-center'
		)
		descriptionEl.classList.add(
			'text-sm'
		)

		return rootEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}