var alpha = 0;
var container = document.getElementById('container');
var itemContainer = container.getElementsByClassName('item-container')[0];
var items = 5;
var counter = 0;
var itemsCounter = [];
var containerWidth = container.offsetHeight;
var containerHeight = container.offsetWidth;

var r1 = containerWidth - 300;
var r2 = containerHeight - 200;
var elips = 360/(items-10);

function init() {
  for (var i = 0; i < items; i++) {
    callImgs();
  }
  animate();
};

function PrintImgs() {
  var div = document.createElement('div');
  div.classList.add('picture');
  itemContainer.appendChild(div);
  itemsCounter.push(div);
  console.log(itemsCounter);
}

function animate() {
  alpha += 0.5;
  for (var i = 0; i < itemsCounter.length; i++) {
    var itemDeg = alpha + (elips * i)
    var sin = 0.5+(Math.sin(degToRad(itemDeg))*0.5)
    var cos = 0.5+(Math.cos(degToRad(itemDeg))*0.5)

    var itemObject = itemsCounter[i];
    var yPos = sin * r1;
    var xPos = cos * r2;
    itemObject.style.left = xPos + 'px';
    itemObject.style.top = yPos + 'px';
    itemObject.style.zIndex = r2 * yPos;
  }

  /*requestAnimationFrame informa al navegador que quieres realizar una 
  animación y solicita que el navegador programe el repintado de la ventana para el próximo 
  ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.*/
  requestAnimationFrame(animate);
}

function degToRad(input) {
  return input*(Math.PI/180);
}

init();
