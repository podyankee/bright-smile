// Progress Script
export const initProgress = () => {
	if (document.querySelector('.progress-js').length) {
		console.log(document.querySelector('.progress-js'));
	}
	var animationDone = false;

	function startProgress() {
		if (animationDone) return;

		if (document.querySelector('.progress-js').length) {
			var skillsTop = document.querySelector('.progress-js').offset().top - 200;
		}
		if (window.scroll({ top: 0 }) >= skillsTop) {
			document.querySelector('.progress-drag').each(function () {
				var documentQuerySelectorthis = document.querySelector(this);

				var percentNum = documentQuerySelectorthis
					.closest('.progress-item')
					.find('.progress-percent')
					.data('percent');

				document.querySelector({ numberValue: 0 }).animate(
					{ numberValue: percentNum },
					{
						duration: 1500,
						easing: 'linear',
						step: function () {
							var roundedValue = Math.floor(this.numberValue);
							documentQuerySelectorthis
								.closest('.progress-item')
								.find('.progress-percent')
								.text(roundedValue + '%');
							documentQuerySelectorthis.width(roundedValue + '%');
						},
						complete: function () {
							documentQuerySelectorthis
								.closest('.progress-item')
								.find('.progress-percent')
								.text(percentNum + '%');
							documentQuerySelectorthis.width(percentNum + '%');
						},
					},
				);
			});

			animationDone = true;
		}
	}

	startProgress();
	window.addEventListener('scroll', function () {
		startProgress();
	});
};
