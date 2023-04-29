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
const tagLine = document.querySelector("p", "span");
let indexSlide = 0;

function ChangeSlide(sens) {
	indexSlide = indexSlide + sens;
	if(indexSlide > slides.length - 1)
	   indexSlide = 0;
	if(indexSlide < 0)
	   indexSlide = slides.length - 1;
	bannerImg.src = "./assets/images/slideshow/" + slides[indexSlide].image;
	tagLine.innerHTML = slides[indexSlide].tagLine;
}

setInterval("ChangeSlide(1)", 5000);


function addPoint() {
	for (let  i = 0; i < 4; i++) {	
	var dot = document.createElement("span");
	dot.classList = ["dot"];
	document.querySelector(".dots").appendChild( dot);
	}
}

addPoint();

let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');
document.querySelector(".dots").appendChild( dot_selected);





