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

var arrowLeft = document.querySelector(".arrow_left");
var arrowRight = document.querySelector(".arrow_right");

function flecheGauche() {
console.log("fleche gauche");
}

function flecheDroite() {
console.log("fleche droite");
}

arrowLeft.addEventListener("click", flecheGauche);
arrowRight.addEventListener("click", flecheDroite);

function addPoint() {
	var dot = document.createElement("span");
	dot.classList = ["dot"];
	document.querySelector(".dots").appendChild( document.createElement("span"));


}