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
		this.#leftSideContent.appendChild(this.#socialLinksList);
		this.#rightSideContent.appendChild(this.#randomFactsList);

		for (const socialMedia of socialMediaLinks) {
			const socialLink = document.createElement('a');
			const socialIcon = new Image();
			socialLink.href = socialMedia.url;
			socialIcon.src = getIcon({ name: socialMedia.platform });
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
		if (randomFacts !== null && randomFacts?.length > 0) {
			for (const fact of randomFacts) {
				const termEl = document.createElement('dt');
				termEl.textContent = fact.label;
				const descEl = document.createElement('dd');
				descEl.textContent = fact.value;
				this.#randomFactsList.appendChild(termEl);
				this.#randomFactsList.appendChild(descEl);
			}
		}

		// add classnames to elements to apply tailwind css styles
		this.#sectionName.classList.add(
			'text-2xl',
			'text-bluemine-300',
			'uppercase'
		)
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}