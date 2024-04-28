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

	constructor({
		sections
	}: ProgressIndicatorConstructorArgs) {
		this.#progress = createElement('div', {
			attributes: {
				class: ['bg-bluemine-200', 'rounded-md', 'w-full', 'h-0']
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
					'border-bluemine-200',
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

		this.positionPentaIcons({
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
			const extraGapsByStyles = 200;
			return totalHeight + sectionHeight + extraGapsByStyles;
		}, 0);

	private getPentaIconElement({
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


	private positionPentaIcons({
		sections,
		totalSectionsHeight,
	}: PentaIconsPlacementArgs): void {
		let accumulatedSectionsHeight: number = 0;
		const sectionWithoutIcon: { height: number, index: null | number } = {
			height: 0,
			index: null
		};

		for (const [index, section] of sections.entries()) {
			const progressContainerWidth = this.#rootContainer.clientWidth || 30;

			const pentaIconElement = this.getPentaIconElement({
				progressContainerWidth,
				section
			})

			if (pentaIconElement) {
				// Since the width & height of 'progress' closely matches that of 'icon-wrapper',
				// this computed value is utilized to slightly adjust the vertical position
				// of the icon to increase precision of penta icon alignment.
				const pentaIconPosAdjustment = Math.round(progressContainerWidth / 2);
				const pentaIconTopPos = sectionWithoutIcon.index !== null &&
					index === sectionWithoutIcon.index + 1 ?
					// The first section with icon will have slight adjustment
					Math.round((
						(accumulatedSectionsHeight + pentaIconPosAdjustment)
						/ totalSectionsHeight) * 100)
					: Math.round((
						(accumulatedSectionsHeight + (pentaIconPosAdjustment + ((index * 0.7) * 200)))
						/ totalSectionsHeight) * 100)

				pentaIconElement.style.top = `${pentaIconTopPos}%`;

				appendChildren(this.#rootContainer, [pentaIconElement]);
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