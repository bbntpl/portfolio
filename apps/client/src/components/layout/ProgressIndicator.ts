import appendChildren from '../../helpers/append-children';
import createElement from '../../helpers/create-element';
import getIcon from '../icons';

interface ProgressIndicatorConstructorArgs {
	sections: Array<HTMLElement>;
}

interface PentaIconsPlacementArgs {
	sections: ProgressIndicatorConstructorArgs['sections'];
	totalSectionsHeight: number;
}

interface PentaIconArgs {
	progressContainerWidth: number;
	section: HTMLElement;
}

export default class ProgressIndicator {
	#rootContainer: HTMLDivElement;
	#progress: HTMLDivElement;

	constructor({ sections }: ProgressIndicatorConstructorArgs) {
		this.#progress = createElement('div', {
			attributes: {
				class: ['bg-downy-source', 'rounded-md', 'w-full', 'h-0']
			}
		});

		this.#rootContainer = createElement('div', {
			attributes: {
				class: [
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
				]
			},
			children: [this.#progress]
		});

		this.putPentaIcons({
			sections,
			totalSectionsHeight: this.getTotalSectionsHeight(sections),
		});

		window.addEventListener('scroll', this.updateScrollProgress);
		window.addEventListener('resize', this.updateScrollProgress);
	}

	private updateScrollProgress = () => {
		// This gives a value representing how far the user has scrolled relative
		// to he total scrollable area.
		const progress = (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
		this.#progress.style.height = `${progress < 100 ? progress : 100}%`;
	}

	private getTotalSectionsHeight = (sections: ProgressIndicatorConstructorArgs['sections']) =>
		sections.reduce((totalHeight, section) => {
			const sectionHeight = section.clientHeight;
			return totalHeight + sectionHeight;
		}, 0);

	private getPentaIcon({
		progressContainerWidth,
		section
	}: PentaIconArgs): HTMLDivElement {
		const pentagonDim = Math.round(progressContainerWidth * 1.3);

		const icon = new Image();
		const pentagonInner = createElement('div', {
			attributes: {
				class: ['pentagon-icon']
			},
			children: [icon]
		});
		const pentagon = createElement('div', {
			attributes: {
				class: ['pentagon-wrapper', 'z-25'],
				style: `width: ${pentagonDim}px; height: ${pentagonDim}px;`
			},
			children: [pentagonInner]
		});

		const sectionName = section.id;
		const capitalizedSectionName = `${sectionName.charAt(0).toUpperCase()}${sectionName.slice(1)}`;
		const iconSrc = getIcon({ name: capitalizedSectionName });

		if (iconSrc) {
			icon.src = iconSrc;
			icon.classList.add('fill-transparent', 'bg-transparent')

			const bgColor = getComputedStyle(pentagonInner).backgroundColor;
			pentagonInner.style.setProperty('pentagon-inner-bg-color', bgColor);

			return pentagon;
		}
	}


	private putPentaIcons({
		sections,
		totalSectionsHeight,
	}: PentaIconsPlacementArgs): void {
		let accumulatedSectionsHeight: number = 0;
		const sectionWithoutIcon: { height: number, index: null | number } = {
			height: 0, index: null
		};

		for (const [index, section] of sections.entries()) {
			const progressContainerWidth = this.#rootContainer.clientWidth || 30;

			const pentaIcon = this.getPentaIcon({
				progressContainerWidth,
				section
			})

			if (pentaIcon) {
				// Since the width & height of 'progress' closely matches that of 'icon-wrapper',
				// this computed value is utilized to slightly adjust the horizontal position
				// of the icon for precise progression checkpoint alignment.
				const pentaIconPosAdjustment = Math.round(progressContainerWidth / 2);
				const pentaIconTopPos = sectionWithoutIcon.index !== null &&
					index === sectionWithoutIcon.index + 1 ?
					Math.round((
						((accumulatedSectionsHeight / 2) + pentaIconPosAdjustment)
						/ totalSectionsHeight) * 100)
					: Math.round((
						(accumulatedSectionsHeight - pentaIconPosAdjustment)
						/ totalSectionsHeight) * 100)

				pentaIcon.style.top = `${pentaIconTopPos}%`;

				appendChildren(this.#rootContainer, [pentaIcon]);
			} else {
				sectionWithoutIcon.height = section.clientHeight;
				sectionWithoutIcon.index = index;
			}

			accumulatedSectionsHeight += section.clientHeight;
		}
	}

	public getElement(): HTMLDivElement {
		return this.#rootContainer;
	}
}