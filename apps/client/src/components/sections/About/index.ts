import { Profile } from './index.types';
import getIcon from '../../icons';

import createElement from '../../../helpers/create-element';
import createElementWithText from '../../../helpers/create-text';
import appendChildren from '../../../helpers/append-children';

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
		this.#image = new Image();
		this.#image.src = imageUrl;
		this.#image.classList.add(
			'min-w-full',
			'max-w-sm',
		)

		this.#imageWrapper = createElement('div', {
			attributes: {
				class: ['viewport-element-transition']
			},
			children: [this.#image]
		});
		this.#socialLinksList = createElement('ul', {
			attributes: {
				class: [
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
				]
			}
		});

		this.#imageAndSocialsContent = createElement('div', {
			attributes: {
				class: [
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
				]
			},
			children: [this.#imageWrapper, this.#socialLinksList]
		});
		this.#aboutInfoContent = createElement('div');

		this.#sectionHeading = createElementWithText('h1', {
			class: [
				'section-text-heading',
				'viewport-element-transition'
			],
			text: 'About'
		});
		this.#contentContainer = createElement('div', {
			attributes: {
				class: [
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
				]
			},
			children: [
				this.#imageAndSocialsContent,
				this.#aboutInfoContent
			]
		});

		this.#rootContainer = createElement('section', {
			attributes: {
				id: 'about',
				class: ['portfolio-section']
			},
			children: [this.#sectionHeading, this.#contentContainer]
		});

		this.#randomFactsList = createElement('dl');

		for (const socialMedia of socialMediaLinks) {
			const socialIcon = new Image();
			socialIcon.setAttribute('width', '32px');
			socialIcon.setAttribute('height', '32px');
			socialIcon.src = getIcon({ name: socialMedia.platform });

			const socialLink = createElement('a', {
				attributes: {
					href: socialMedia.url,
					target: '_blank',
					class: ['viewport-element-transition']
				},
				children: [socialIcon]
			});

			appendChildren(this.#socialLinksList, [socialLink]);
		}

		// Add about me paragraphs
		for (const paragraph of about) {
			const paragraphElement = createElementWithText('p', {
				text: paragraph,
				class: ['pb-6', 'viewport-element-transition']
			});
			appendChildren(this.#aboutInfoContent, [paragraphElement]);
		}

		// Add extra facts about me
		appendChildren(this.#aboutInfoContent, [this.#randomFactsList]);
		if (randomFacts !== null && randomFacts?.length > 0) {
			for (const fact of randomFacts) {
				const termEl = createElementWithText('dt', {
					text: `${fact.label}:`
				});
				const descEl = createElementWithText('dd', {
					text: String(fact.value)
				});
				const factContainer = createElement('div', {
					attributes: {
						class: [
							'flex',
							'flex-row',
							'gap-2',
							'viewport-element-transition'
						]
					},
					children: [termEl, descEl]
				});

				appendChildren(this.#randomFactsList, [factContainer]);
			}
		}
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}