import './sass/style.sass';

import { initSubmenu } from '/scripts/initSubmenu';
import animationNumbers from '/scripts/animationNumbers';

const initNumbersAnimation = () => {
	animationNumbers([
		{
			selectorNum: '.num__first',
			speedAnimation: 10,
			startNum: 1,
			endNum: 120,
		},
		{
			selectorNum: '.num__second',
			speedAnimation: 15,
			startNum: 1,
			endNum: 90,
		},
		{
			selectorNum: '.num__third',
			speedAnimation: 15,
			startNum: 1,
			endNum: 70,
		},
		{
			selectorNum: '.num__forth',
			speedAnimation: 5,
			startNum: 1,
			endNum: 200,
		},
	]);
};

const init = () => {
	initSubmenu();
	initNumbersAnimation();
};

document.addEventListener('DOMContentLoaded', init);
