import getIcon from '../icons';

interface ProgressIndicatorConstructorArgs {
	sections: Array<HTMLElement>;
}

interface HexaIconsPlacementArgs {
	sections: ProgressIndicatorConstructorArgs['sections'];
	totalSectionsHeight: number;
}

interface HexaIconArgs {
	rootContainerWidth: number;
	section: HTMLElement;
}

export default class ProgressIndicator {
	#rootContainer: HTMLDivElement;
	#progress: HTMLDivElement;

	constructor({ sections }: ProgressIndicatorConstructorArgs) {
		this.#rootContainer = document.createElement('div');
		this.#progress = document.createElement('div');

		this.#rootContainer.appendChild(this.#progress);

		this.#rootContainer.classList.add(
			'fixed',
			'top-1/3',
			'transform',
			'hidden',
			'sm:flex',
			'md:flex',
			'lg:flex',
			'xl:flex',
			'2xl:flex',
			'border-4',
			'justify-center',
			'rounded-xl',
			'border-downy-source',
			'w-6',
			'h-96',
			'left-8px',
			'sm:left-16px',
			'md:left-40px',
			'lg:left-80px',
			'max-h-3/5',
			'z-10',
			'progress-indicator',
			'viewport-element-transition'
		);

		this.#progress.classList.add(
			'bg-downy-source',
			'rounded-md',
			'w-full',
			'h-0'
		)

		this.putHexaIcons({
			sections,
			totalSectionsHeight: this.getTotalSectionsHeight(sections),
		});

		window.addEventListener('scroll', this.updateScrollProgress);
		window.addEventListener('resize', this.updateScrollProgress);
	}

	private updateScrollProgress = () => {
		const progress = (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
		this.#progress.style.height = `${progress < 100 ? progress : 100}%`;
	}

	private getTotalSectionsHeight = (sections: ProgressIndicatorConstructorArgs['sections']) =>
		sections.reduce((totalHeight, section) => {
			const sectionHeight = section.clientHeight;
			return totalHeight + sectionHeight;
		}, 0);

	private getHexaIcon({
		rootContainerWidth,
		section
	}: HexaIconArgs): HTMLDivElement | false {
		const hexagon = document.createElement('div');
		const hexagonInner = document.createElement('div');

		const sectionName = section.id;
		const capitalizedSectionName = `${sectionName.charAt(0).toUpperCase()}${sectionName.slice(1)}`;
		const icon = new Image();
		const iconSrc = getIcon({ name: capitalizedSectionName });
		icon.src = iconSrc;

		const hexagonDim = Math.round(rootContainerWidth * 1.4);
		hexagon.classList.add(
			'hexagon-wrapper',
			'z-25'
		);
		hexagon.style.width = `${hexagonDim}px`;
		hexagon.style.height = `${hexagonDim}px`;

		hexagonInner.classList.add(
			'hexagon-icon',
			'bg-downy-100'
		)

		if (iconSrc) {
			hexagon.appendChild(hexagonInner);
			hexagonInner.appendChild(icon)
			icon.classList.add('fill-transparent', 'bg-transparent')

			return hexagon;
		} else {
			return false;
		}
	}

	private putHexaIcons({
		sections,
		totalSectionsHeight,
	}: HexaIconsPlacementArgs): void {
		let accumulatedSectionsHeight: number = 0;

		for (const section of sections) {
			const rootContainerWidth = this.#rootContainer.clientWidth || 30;

			const hexaIcon = this.getHexaIcon({
				rootContainerWidth,
				section
			})

			if (hexaIcon) {
				const hexaIconPosAdjustment = Math.round(rootContainerWidth / 2);
				const hexaIconTopPos = Math.round((
					(accumulatedSectionsHeight - hexaIconPosAdjustment) / totalSectionsHeight) * 100);
				hexaIcon.style.top = `${hexaIconTopPos}%`;

				this.#rootContainer.appendChild(hexaIcon);
			}

			accumulatedSectionsHeight += section.clientHeight;
		}
	}

	public getElement(): HTMLDivElement {
		return this.#rootContainer;
	}
}
