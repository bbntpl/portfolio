interface ViewportElementsTransitionsArgs {
	transitionName: string;
	threshold: number | number[];
	prioritizedClassNames?: Array<string> | string | null;
}

export function elementsInViewportTransitions({
	transitionName,
	threshold,
	prioritizedClassNames = null
}: ViewportElementsTransitionsArgs) {
	const prioritizedElementsToTransition = Array.isArray(prioritizedClassNames)
		? prioritizedClassNames.map(cn => document.querySelectorAll(`.${cn}.${transitionName}`))
		: document.querySelectorAll(`.${prioritizedClassNames}.${transitionName}`);
	const elementsToTransition = document.querySelectorAll(`.${transitionName}`);

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				// Add delay between execution
				setTimeout(() => {

					// Reminder, just incase: Make sure that the received transition name is associated
					// to a class in style.css and the set styles, if somewhat I'll change
					// it in the future
					entry.target.classList.remove('-translate-y-10', 'opacity-0');
					entry.target.classList.add('translate-y-0', 'opacity-100');
					observer.unobserve(entry.target);
				}, (index + 1) * 90)
			}
		});
	}, { threshold });

	// Prioritize elements with the following class names by order before the elements that has
	// transition class name
	if (prioritizedClassNames) {
		if (Array.isArray(prioritizedElementsToTransition)) {
			prioritizedElementsToTransition.forEach(elementsToTransition => {
				return elementsToTransition.forEach(element => {
					observer.observe(element);
				})
			})
		} else {
			prioritizedElementsToTransition.forEach(element => {
				observer.observe(element);
			});
		}
	}

	elementsToTransition.forEach(element => {
		observer.observe(element);
	});
}