import './sass/style.sass';
import 'image-compare-viewer/dist/image-compare-viewer.min.css';
import ImageCompare from 'image-compare-viewer';

import { initSubmenu } from '/scripts/initSubmenu';
import animationNumbers from '/scripts/animationNumbers';
import { initProgress } from '/scripts/initProgress';

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

const initImagesCompare = () => {
	const element = document.getElementById('image-compare');
	const viewer = new ImageCompare(element).mount();
};

const init = () => {
	initSubmenu();
	initNumbersAnimation();
	initProgress();
	initImagesCompare();
};

document.addEventListener('DOMContentLoaded', init);
