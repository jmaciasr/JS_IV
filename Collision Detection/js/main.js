var canvasSquare = document.getElementById("canvas-square");
var contextSquares = canvasSquare.getContext("2d");


var firstSquarex = canvasSquare.width/2;
var firstSquarey = canvasSquare.height-55;

var secondSquarex = canvasSquare.width/20;
var secondSquarey = canvasSquare.height-70;

var directionFirstSquarex = 2;
var directionFirstSquarey = -2;

var directionSecondSquarex = 2;
var directionSecondSquarey = -2;

function drawSquare() {
	contextSquares.beginPath();
    contextSquares.rect(firstSquarex, firstSquarey, 70, 70);
    contextSquares.fillStyle = "#999";
    contextSquares.fill();
    contextSquares.closePath();

    contextSquares.beginPath();
    contextSquares.rect(secondSquarex, secondSquarey, 50, 50);
    contextSquares.fillStyle = "#000";
    contextSquares.fill();
    contextSquares.closePath();
}


function initSquares() {
	contextSquares.clearRect(0, 0, canvasSquare.width, canvasSquare.height);
    drawSquare();

    if (firstSquarex > canvasSquare.width-50 || firstSquarex + directionFirstSquarex < 0) {
        directionFirstSquarex =- directionFirstSquarex
    }
    if (firstSquarey > canvasSquare.height-50 || firstSquarey + directionFirstSquarey < 0) {
        directionFirstSquarey =- directionFirstSquarey
    }
    firstSquarex += directionFirstSquarex;
    firstSquarey += directionFirstSquarey;

    if (secondSquarex > canvasSquare.width-50 || secondSquarex + directionSecondSquarex < 0) {
        directionSecondSquarex =- directionSecondSquarex
    }
    if (secondSquarey > canvasSquare.height-50 || secondSquarey + directionSecondSquarey < 0) {
        directionSecondSquarey =- directionSecondSquarey
    }
    secondSquarex += directionSecondSquarex;
    secondSquarey += directionSecondSquarey;

    if (secondSquarex < firstSquarex + 50 && firstSquarex < secondSquarex || firstSquarex < secondSquarex + 50 && secondSquarex < firstSquarex) {
        console.log('Squares Collision Detection')
        directionFirstSquarex = -directionFirstSquarex;
        directionSecondSquarex =- directionSecondSquarex;
    }

    if (secondSquarey > firstSquarey + 50 && firstSquarey < secondSquarey) {
        directionFirstSquarey =- directionFirstSquarey;
    }
}

setInterval(initSquares, 10);
