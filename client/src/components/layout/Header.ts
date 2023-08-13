import getIcon from '../icons';

interface HeaderListArgs {
	name: string;
}

export default class Header {
	#container: HTMLDivElement;
	#logoSrc: string;
	#logoObject: HTMLObjectElement;
	#logoWrapper: HTMLDivElement;
	#sectionList: HTMLUListElement;

	constructor() {

		this.#container = document.createElement('div');
		this.#container.id = 'header';

		this.#logoWrapper = document.createElement('div');
		this.#logoWrapper.id = 'logo-wrapper';

		// Setup logo icons
		this.#logoSrc = getIcon({ name: 'Logo' });

		this.#logoObject = document.createElement('object');
		this.#logoObject.setAttribute('type', 'image/svg+xml');
		this.#logoObject.setAttribute('data', this.#logoSrc);
		this.#logoObject.setAttribute('width', '50');
		this.#logoObject.setAttribute('height', '50');
		console.log(this.#logoObject.contentDocument)

		// add classes to apply styles
		this.#logoObject.classList.add(
			'select-none',
			'pointer-events-auto'
		)
		this.#container.classList.add(
			'flex',
			'fixed',
			'justify-between',
			'top-0',
			'md:px-8',
			'sm:px-3',
			'py-2',
			'w-full',
			'z-20'
		)

		this.#sectionList = this.createMenuList([
			{ name: 'about' },
			{ name: 'skills' },
			{ name: 'projects' },
			{ name: 'education' },
		]);

		this.#logoWrapper.appendChild(this.#logoObject);
		this.#container.appendChild(this.#logoWrapper);
		this.#container.appendChild(this.#sectionList);
	}

	private createMenuList(items: Array<HeaderListArgs>): HTMLUListElement {
		const sectionSelection = document.createElement('ul');
		sectionSelection.classList.add(
			'md:flex',
			'hidden',
			'lg:flex',
			'items-center',
			'space-x-4',
			'md:space-x-6',
			'lg:space-x-8'
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
				'transition',
				'duration-300',
				'hover:cursor-pointer'
			);

			listItem.appendChild(sectionLink);
			sectionSelection.appendChild(listItem);
		}

		return sectionSelection;
	}

	public getElement(): HTMLDivElement {
		return this.#container;
	}
}