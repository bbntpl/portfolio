interface ViewportElementsTransitionsArgs {
	elementClassName: string;
	threshold: number | number[]
}

export function elementsInViewportTransitions({
	elementClassName, threshold
}: ViewportElementsTransitionsArgs) {
	const elementsToTransition = document.querySelectorAll(`.${elementClassName}`);

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				// Add delay between execution
				setTimeout(() => {

					// Reminder, just incase: Make sure that the received class name is associated
					// to a class in style.css and the set styles, if somewhat I'll change
					// it in the future
					entry.target.classList.remove('-translate-y-10', 'opacity-0');
					entry.target.classList.add('translate-y-0', 'opacity-100');
					observer.unobserve(entry.target);
				}, (index + 1) * 90)
			}
		});
	}, { threshold });

	elementsToTransition.forEach(element => {
		observer.observe(element);
	});
}