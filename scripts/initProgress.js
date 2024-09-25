// Progress Script
export const initProgress = () => {
	var progressMeter = document.querySelectorAll('.progress-drag');
	var progressNumber = document.querySelectorAll('.progress-percent');
	var progressNumberWidths = [95, 85, 75];
	var moveTimers = [];
	var width = 0;
	window.addEventListener('scroll', progressNumberAdd);

	function progressNumberAdd() {
		if (window.pageYOffset > progressMeter[0].offsetTop - 400) {
			window.removeEventListener('scroll', progressNumberAdd);
			initProgressBar();
		}
	}

	function initProgressBar() {
		for (var i = 0; i < progressMeter.length; i++) {
			x(i);
		}
	}

	function x(i) {
		moveTimers[i] = setInterval(numberAddCheker, 15, i);
	}

	function numberAddCheker(i) {
		if (width >= progressNumberWidths[i]) {
			clearInterval(moveTimers[i]);
		} else {
			width++;
			progressMeter[i].style.width = width + '%';
			progressNumber[i].textContent = width * 1 + '%';
		}
	}
};
