export interface ElementOptions {
	text?: string;
	class?: string | string[];
}

export default function createElementWithText<K extends keyof HTMLElementTagNameMap>(
	tagName: K,
	options?: ElementOptions,
): HTMLElementTagNameMap[K] {
	const element = document.createElement(tagName);

	if (options?.text) {
		element.textContent = options.text;
	}

	if (options?.class) {
		Array.isArray(options.class)
			? element.classList.add(...options.class)
			: element.classList.add(options.class);
	}

	return element;
}