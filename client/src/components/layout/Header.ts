import getIcon from '../icons';

interface HeaderListArgs {
	name: string;
}

interface HeaderCoreProps {
	currentScrollY: number;
	previousVisualState: 'hidden' | 'displayed';
}

export default class Header {
	#rootContainer: HTMLDivElement;
	#logoSrc: string;
	#logoObject: HTMLObjectElement;
	#logoWrapper: HTMLDivElement;
	#sectionList: HTMLUListElement;
	#props: HeaderCoreProps;

	constructor() {
		this.#props = {
			currentScrollY: window.scrollY,
			previousVisualState: 'displayed'
		};

		this.#rootContainer = document.createElement('div');
		this.#rootContainer.id = 'header';
		this.#logoWrapper = document.createElement('div');
		this.#logoWrapper.id = 'logo-wrapper';

		this.#logoSrc = getIcon({ name: 'Logo' });

		this.#logoObject = document.createElement('object');
		this.#logoObject.setAttribute('type', 'image/svg+xml');
		this.#logoObject.setAttribute('data', this.#logoSrc);
		this.#logoObject.setAttribute('width', '50');
		this.#logoObject.setAttribute('height', '50');

		// Add classes to apply styles
		this.#logoObject.classList.add(
			'select-none',
			'pointer-events-auto',
			'viewport-element-transition'
		)
		this.#rootContainer.classList.add(
			'flex',
			'fixed',
			'justify-center',
			'md:justify-between',
			'lg:justify-between',
			'top-0',
			'px-6',
			'md:px-8',
			'py-4',
			'w-full',
			'z-20',
			'bg-midnight',
			'bg-opacity-70',
		)
		this.#sectionList = this.createMenuList([
			{ name: 'about' },
			{ name: 'skills' },
			{ name: 'projects' },
			{ name: 'education' },
		]);

		// Append the elements to the parent
		this.#logoWrapper.appendChild(this.#logoObject);
		this.#rootContainer.appendChild(this.#logoWrapper);
		this.#rootContainer.appendChild(this.#sectionList);

		window.addEventListener('scroll', () => {
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

			this.#props.currentScrollY = window.scrollY;
		});
	}

	private createMenuList(items: Array<HeaderListArgs>): HTMLUListElement {
		const sectionSelection = document.createElement('ul');
		sectionSelection.classList.add(
			'hidden',
			'md:flex',
			'lg:flex',
			'xl:flex',
			'items-center',
			'space-x-4',
			'md:space-x-6',
			'lg:space-x-8',
			'font-layout'
		);

		for (let i = 0; i < items.length; i++) {
			const listItem = document.createElement('li');
			const sectionLink = document.createElement('a');

			sectionLink.href = `#${items[i].name}`;
			sectionLink.textContent = items[i].name.toUpperCase();
			sectionLink.classList.add(
				'text-downy-source',
				'hover:text-downy-100',
				'px-2',
				'py-1',
				'hover:cursor-pointer',
				'viewport-element-transition'
			);

			listItem.appendChild(sectionLink);
			sectionSelection.appendChild(listItem);
		}

		return sectionSelection;
	}

	private undisplayHeader({ headerEl }: { headerEl: HTMLDivElement }) {
		headerEl.classList.add('-translate-y-full', 'opacity-0');
		headerEl.classList.remove('translate-y-0', 'opacity-100');
	}

	private displayHeader({ headerEl }: { headerEl: HTMLDivElement }) {
		headerEl.classList.remove('-translate-y-full', 'opacity-0');
		headerEl.classList.add('translate-y-0', 'opacity-100');
	}

	public getRootElement(): HTMLDivElement {
		return this.#rootContainer;
	}
}