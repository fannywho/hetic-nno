const test = document.querySelector('.support-card.active');
const supportCardList = document.querySelectorAll('.support-card');
const length = supportCardList.length;
const supportCard = document.querySelector('.s-support__inner');
let sliderIndex = 1;

console.log(sliderIndex);

function defineStart(e) {
	this.setAttribute('data-start', e.changedTouches[0].clientX)
}

function goSlide(e) {
	console.log('length :' + length);
	console.log('slider :' + sliderIndex);
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

supportCardList.forEach(function (el) {
	el.addEventListener('touchstart', defineStart);
	el.addEventListener('touchend', goSlide)
});
