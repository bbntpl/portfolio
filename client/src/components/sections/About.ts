import { Profile } from '../../types';
import getIcon from '../icons';

export default class About {
	#portfolioSection: HTMLElement;
	#sectionName: HTMLHeadingElement;
	#container: HTMLDivElement;
	#leftSideContent: HTMLDivElement;
	#rightSideContent: HTMLDivElement;

	#imageWrapper: HTMLDivElement;
	#image: HTMLImageElement;

	#socialLinksList: HTMLUListElement;
	#randomFactsList: HTMLDListElement;

	constructor({
		imageUrl,
		about,
		socialMediaLinks,
		randomFacts
	}: Profile) {
		this.#portfolioSection = document.createElement('section');
		this.#sectionName = document.createElement('h1');
		this.#sectionName.textContent = 'About';
		this.#container = document.createElement('div');
		this.#leftSideContent = document.createElement('div');
		this.#rightSideContent = document.createElement('div');

		this.#imageWrapper = document.createElement('div');
		this.#image = new Image();
		this.#image.src = imageUrl;

		this.#randomFactsList = document.createElement('dl');
		this.#socialLinksList = document.createElement('ul');

		this.#portfolioSection.appendChild(this.#sectionName);
		this.#portfolioSection.appendChild(this.#container);
		this.#container.appendChild(this.#leftSideContent);
		this.#container.appendChild(this.#rightSideContent);
		this.#leftSideContent.appendChild(this.#imageWrapper);
		this.#imageWrapper.appendChild(this.#image);
		this.#leftSideContent.appendChild(this.#socialLinksList);

		for (const socialMedia of socialMediaLinks) {
			const socialLink = document.createElement('a');
			const socialIcon = new Image();
			socialIcon.setAttribute('width', '32px');
			socialIcon.setAttribute('height', '32px');
			socialLink.href = socialMedia.url;
			socialLink.target = '_blank';
			socialIcon.src = getIcon({ name: socialMedia.platform });

			socialLink.appendChild(socialIcon);
			this.#socialLinksList.appendChild(socialLink);
		}

		// add about paragraphs
		for (const paragraph of about) {
			const paragraphElement = document.createElement('p');
			paragraphElement.classList.add(
				'pb-6'
			);
			paragraphElement.textContent = paragraph;

			this.#rightSideContent.appendChild(paragraphElement);
		}

		// add extra facts about me
		this.#rightSideContent.appendChild(this.#randomFactsList);
		if (randomFacts !== null && randomFacts?.length > 0) {
			for (const fact of randomFacts) {
				const factContainer = document.createElement('div');
				const termEl = document.createElement('dt');
				termEl.textContent = `${fact.label}:`;
				const descEl = document.createElement('dd');
				descEl.textContent = String(fact.value);
				factContainer.appendChild(termEl);
				factContainer.appendChild(descEl);
				this.#randomFactsList.appendChild(factContainer);

				factContainer.classList.add('flex', 'flex-row', 'gap-2');
			}
		}

		// add classnames to elements to apply tailwind css styles
		this.#image.style.minWidth = '100%';
		this.#image.style.maxWidth = '350px';
		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
		this.#container.classList.add(
			'flex',
			'gap-4',
			'md:gap-8',
			'lg:gap-10',
			'xl:gap-14',
			'font-sans',
			'text-bluemine-200',
			'flex-col',
			'lg:flex-row',
			'xl:flex-row',
			'2xl:flex-row',
			'space-between',
			'items-center',
			'lg:items-start',
			'xl:items-start',
		)
		this.#leftSideContent.classList.add(
			'flex',
			'flex-col',
			'lg:flex-row',
			'xl:flex-row',
			'2xl:flex-row',
			'items-center',
			'lg:items-start',
			'xl:items-start',
			'2xl:items-start',
			'gap-4'
		)
		this.#socialLinksList.classList.add(
			'flex',
			'flex-wrap',
			'flex-row',
			'sm:flex-row',
			'md:flex-row',
			'lg:flex-col',
			'xl:flex-col',
			'2xl:flex-col',
			'gap-4',
			'min-w-8',
			'w-max'
		)

	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}