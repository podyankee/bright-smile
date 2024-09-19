export const initSubmenu = () => {
	const headerLinks = document.querySelectorAll('.menu-item-has-children > a');

	headerLinks.forEach(link => {
		const span = document.createElement('span');
		span.className = 'menu-item-plus';
		span.textContent = '+';
		link.appendChild(span);
	});
};
