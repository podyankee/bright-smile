import './sass/style.sass';

import { initSubmenu } from '/scripts/initSubmenu';

const init = () => {
	initSubmenu();
};

document.addEventListener('DOMContentLoaded', init);
