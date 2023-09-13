export default function appendChildren(
	parent: HTMLElement,
	children: HTMLElement[],
): void {
	for (const child of children) {
		parent.appendChild(child);
	}
}