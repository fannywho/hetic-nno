const supportCardList = document.querySelectorAll('.support-card');
const length = supportCardList.length;
const supportCard = document.querySelector('.s-support__inner');
let sliderIndex = 1;
let windowWidth = 0;



function defineStart(e) {
	this.setAttribute('data-start', e.changedTouches[0].clientX)
}

function goSlide(e) {
	if (windowWidth < 992) {
		supportCardList[sliderIndex].classList.remove("active");
		if (this.getAttribute('data-start') > e.changedTouches[0].clientX) {
			if (sliderIndex < length) {
				if (sliderIndex === 1) {
					supportCard.style.transform = 'translateX(-50%)';
				} else {
					supportCard.style.transform = 'translateX(-10px)';
				}
				sliderIndex++;
			}
		} else if (this.getAttribute('data-start') < e.changedTouches[0].clientX) {
			if (sliderIndex > 0) {
				if (sliderIndex === 1) {
					supportCard.style.transform = 'translateX(50%)';
				} else {
					supportCard.style.transform = 'translateX(10px)';
				}
				sliderIndex--;
			}
		}
		supportCardList[sliderIndex].classList.add("active");
	}
}

supportCardList.forEach(function (el) {
	el.addEventListener('touchstart', defineStart);
	el.addEventListener('touchend', goSlide)
});

window.addEventListener('resize', () => {
	windowWidth = window.innerWidth;

	if (windowWidth > 992) {
		supportCard.style.transform = 'translateX(0)';
	}
});