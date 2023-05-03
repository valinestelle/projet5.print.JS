const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector("#tagLine");
let indexSlide = 0;

function ChangeSlide(sens) {
	let dot = document.querySelectorAll('.dot');
    dot[indexSlide].classList.remove('dot_selected');

	indexSlide = indexSlide + sens;
	if(indexSlide > slides.length - 1) {
	   indexSlide = 0;
	}
	if(indexSlide < 0) {
	   indexSlide = slides.length - 1;
	}
	bannerImg.src = "./assets/images/slideshow/" + slides[indexSlide].image;
	tagLine.innerHTML = slides[indexSlide].tagLine;
	dot[indexSlide].classList.add('dot_selected');
}

function addPoint() {
	for (let  i = 0; i < slides.length; i++) {	
	let dot = document.createElement("span");
	dot.classList = ["dot"];
	document.querySelector(".dots").appendChild( dot);
	}
	document.querySelector(".dots").firstElementChild.classList.add('dot_selected');
}

addPoint();

document.querySelector(".arrow_left").addEventListener("click", () => { ChangeSlide(-1) });
document.querySelector(".arrow_right").addEventListener("click", () => { ChangeSlide(1) });






