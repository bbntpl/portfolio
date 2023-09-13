export type ElementAttributes = {
	[key: string]: string | string[] | EventListener;
};

export type ElementOption = {
	attributes?: ElementAttributes,
	children?: (Node | string)[],
	textContent?: string,
}

export default function createElement<K extends keyof HTMLElementTagNameMap>(
	tagName: K,
	options?: ElementOption,
): HTMLElementTagNameMap[K] {
	const element = document.createElement(tagName);

	if (options?.textContent) {
		element.textContent = options.textContent;
	}

	if (options?.attributes) {
		const { attributes } = options;
		for (const key in attributes) {
			const value = attributes[key];
			if (key.startsWith('on') && typeof value === 'function') {
				element.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
			} else if (key === 'class' && Array.isArray(value)) {
				element.classList.add(...value);
			} else if (key === 'class' && typeof value === 'string') {
				element.classList.add(value);
			} else {
				element.setAttribute(key, value as string);
			}
		}
	}

	if (options?.children) {
		for (const child of options.children) {
			if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(child);
			}
		}
	}

	return element;
}