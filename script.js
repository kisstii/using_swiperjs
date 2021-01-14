function loader() {

	let mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',
		loop: true,
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

}
window.addEventListener("load", loader);