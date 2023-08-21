import { Profile } from './index.types';
import getIcon from '../../icons';

export default class AboutSection {
	#rootContainer: HTMLElement;
	#sectionHeading: HTMLHeadingElement;
	#contentContainer: HTMLDivElement;
	#imageAndSocialsContent: HTMLDivElement;
	#aboutInfoContent: HTMLDivElement;

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
		this.#rootContainer = document.createElement('section');
		this.#sectionHeading = document.createElement('h1');
		this.#rootContainer.id = 'about'
		this.#sectionHeading.textContent = 'About';
		this.#contentContainer = document.createElement('div');
		this.#imageAndSocialsContent = document.createElement('div');
		this.#aboutInfoContent = document.createElement('div');

		this.#imageWrapper = document.createElement('div');
		this.#image = new Image();
		this.#image.src = imageUrl;

		this.#randomFactsList = document.createElement('dl');
		this.#socialLinksList = document.createElement('ul');

		this.#rootContainer.appendChild(this.#sectionHeading);
		this.#rootContainer.appendChild(this.#contentContainer);
		this.#contentContainer.appendChild(this.#imageAndSocialsContent);
		this.#contentContainer.appendChild(this.#aboutInfoContent);
		this.#imageAndSocialsContent.appendChild(this.#imageWrapper);
		this.#imageAndSocialsContent.appendChild(this.#socialLinksList);
		this.#imageWrapper.appendChild(this.#image);

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

			socialLink.classList.add('viewport-element-transition');
		}

		// Add about me paragraphs
		for (const paragraph of about) {
			const paragraphElement = document.createElement('p');
			paragraphElement.classList.add(
				'pb-6'
			);
			paragraphElement.textContent = paragraph;

			this.#aboutInfoContent.appendChild(paragraphElement);

			paragraphElement.classList.add('viewport-element-transition');
		}

		// Add extra facts about me
		this.#aboutInfoContent.appendChild(this.#randomFactsList);
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

				factContainer.classList.add(
					'flex',
					'flex-row',
					'gap-2',
					'viewort-element-transition'
				);
			}
		}

		// Add classnames to elements to apply tailwind css styles
		this.#image.classList.add(
			'min-w-full',
			'max-w-sm',
		)
		this.#rootContainer.classList.add('portfolio-section');
		this.#sectionHeading.classList.add(
			'section-text-heading',
			'viewport-element-transition'
		);
		this.#contentContainer.classList.add(
			'flex',
			'gap-6',
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
		this.#imageAndSocialsContent.classList.add(
			'flex',
			'flex-col',
			'lg:flex-row',
			'xl:flex-row',
			'2xl:flex-row',
			'items-center',
			'lg:items-start',
			'xl:items-start',
			'2xl:items-start',
			'gap-4',
			'max-w-full'
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
			'w-max',
			'max-w-full'
		)
		this.#imageWrapper.classList.add(
			'viewport-element-transition',
		)
	}

	public getRootElement(): HTMLElement {
		return this.#rootContainer;
	}
}