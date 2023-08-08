import { Sections } from '../../../types';
import getIcon from '../../icons';

export default class Header {
	currentSection: Sections | '';
	containerEl: HTMLDivElement;
	logoIcon: HTMLImageElement;

	constructor(currentSection: Sections | '' = '') {
		this.currentSection = currentSection;

		this.containerEl = document.createElement('div');

		this.logoIcon = new Image();
		this.logoIcon.src = getIcon({ name: 'Loading' });

		// Set SVG image attrs 
		this.logoIcon.setAttribute('width', '32');
		this.logoIcon.setAttribute('height', '32');

		this.containerEl.appendChild(this.logoIcon);
		this.containerEl.appendChild(this.currentSection);
	}

	public setCurrentSection(currentSection: Sections | '') {
		this.currentSection = currentSection;
	}
}