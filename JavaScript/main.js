
// burger menu start
const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})

//burger menu end


/*===========================================*/
document.querySelectorAll('.slider').forEach(slider => {
	const slides = slider.querySelectorAll('.slider-item');
	const prevBtn = slider.querySelector('.slider-btn.prev');
	const nextBtn = slider.querySelector('.slider-btn.next');
	let currentIndex = 0; // индекс центральной картинки
  
	function updateSlides() {
	  slides.forEach((slide, index) => {
		slide.classList.remove('active', 'left', 'right');
		if(index === currentIndex) {
		  slide.classList.add('active');
		} else if(index === (currentIndex - 1 + slides.length) % slides.length) {
		  slide.classList.add('left');
		} else if(index === (currentIndex + 1) % slides.length) {
		  slide.classList.add('right');
		}
	  });
	}
  
	// При инициализации — центральная картинка будет первая (0), чтобы по клику сразу стала 2-я
	updateSlides();
  
	prevBtn.addEventListener('click', () => {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	  updateSlides();
	});
  
	nextBtn.addEventListener('click', () => {
	  currentIndex = (currentIndex + 1) % slides.length;
	  updateSlides();
	});
  });
  