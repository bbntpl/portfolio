import getIcon from '../icons';
import createElement from '../../helpers/create-element';
import createElementWithText from '../../helpers/create-text';
import appendChildren from '../../helpers/append-children';

interface HeaderListArgs {
	name: string;
}

interface HeaderCoreProps {
	currentScrollY: number;
	previousVisualState: 'hidden' | 'displayed';
}

export default class Header {
	#rootContainer: HTMLDivElement;
	#logoObject: HTMLObjectElement;
	#props: HeaderCoreProps;

	constructor() {
		this.#props = {
			currentScrollY: window.scrollY,
			previousVisualState: 'displayed'
		};

		const logoSrc = getIcon({ name: 'Logo' });

		this.#logoObject = createElement('object', {
			attributes: {
				type: 'image/svg+xml',
				data: logoSrc,
				width: '50',
				height: '50',
				class: [
					'select-none',
					'pointer-events-auto',
					'viewport-element-transition'
				]
			}
		});

		this.#rootContainer = createElement('div', {
			attributes: {
				id: 'header',
				class: [
					'flex',
					'fixed',
					'justify-center',
					'md:justify-between',
					'lg:justify-between',
					'top-0',
					'px-4',
					'sm:px-6',
					'md:px-12',
					'lg:px-20',
					'py-4',
					'w-full',
					'z-20',
					'bg-midnight',
					'bg-opacity-70',
					'transition-all'
				]
			},
			children: [
				createElement('div', {
					attributes: {
						id: 'logo-wrapper',
						class: []
					},
					children: [this.#logoObject]
				}),
				this.createMenuList([
					{ name: 'about' },
					{ name: 'skills' },
					{ name: 'projects' },
					{ name: 'education' },
				])
			]
		});

		window.addEventListener('scroll', this.handleScroll.bind(this));

		// Initial styles if viewport screen is at the very top
		if (window.scrollY === 0) {
			this.#rootContainer.classList.remove('bg-opacity-70', 'bg-midnight');
			this.#rootContainer.classList.add('bg-transparent');
		}
	}

	private createMenuList(items: Array<HeaderListArgs>): HTMLUListElement {
		const sectionSelection = createElement('ul', {
			attributes: {
				class: ['hidden',
					'md:flex',
					'lg:flex',
					'xl:flex',
					'items-center',
					'space-x-4',
					'md:space-x-6',
					'lg:space-x-8',
					'font-layout'
				]
			},
			children: items.map(item => {
				const listItem = createElement('li');
				const sectionLink = createElementWithText('a', {
					text: item.name.toUpperCase(),
					class: [
						'text-downy-source',
						'hover:text-downy-100',
						'px-2',
						'py-1',
						'hover:cursor-pointer',
						'viewport-element-transition'
					]
				});

				sectionLink.href = `#${item.name}`;
				appendChildren(listItem, [sectionLink]);

				return listItem;
			})
		});

		return sectionSelection;
	}

	private handleScroll() {
		const { currentScrollY, previousVisualState } = this.#props

		// When the viewer scrolls down, it must disappear with transition
		if (currentScrollY < window.scrollY && previousVisualState !== 'hidden') {
			this.undisplayHeader({ headerEl: this.#rootContainer });
			this.#props.previousVisualState = 'hidden';
		} else if (currentScrollY > window.scrollY && previousVisualState !== 'displayed') {
			// When the viewer scrolls up, it must reappear with transition
			this.displayHeader({ headerEl: this.#rootContainer });
			this.#props.previousVisualState = 'displayed';
		}

		if (window.scrollY === 0) {
			this.#rootContainer.classList.remove('bg-opacity-70', 'bg-midnight');
			this.#rootContainer.classList.add('bg-transparent');
		} else if (scrollY !== 0 && currentScrollY === 0) {
			this.#rootContainer.classList.remove('bg-transparent');
			this.#rootContainer.classList.add('bg-opacity-70', 'bg-midnight');
		}

		this.#props.currentScrollY = window.scrollY;
	}

	private undisplayHeader({ headerEl }: { headerEl: HTMLDivElement }) {
		headerEl.classList.add('-translate-y-full', 'opacity-0');
		headerEl.classList.remove('translate-y-0', 'opacity-100');
	}

	private displayHeader({ headerEl }: { headerEl: HTMLDivElement }) {
		headerEl.classList.remove('-translate-y-full', 'opacity-0');
		headerEl.classList.add('translate-y-0', 'opacity-100');
	}

	public getRootElement = (): HTMLDivElement => this.#rootContainer;
}