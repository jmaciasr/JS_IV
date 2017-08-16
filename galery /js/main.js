//constructor 
function slider(url, slider, next, back, showNumber) {
	this.index = 0;
	this.galery =  url;
	this.lengthArray = this.galery.length;
	this.imgSlider = document.getElementById(slider);
	this.next = document.getElementById(next);
	this.back = document.getElementById(back);
	this.showNumber = document.getElementById(showNumber);
} 
//end constructor

//prototype
slider.prototype = {

	show: function () {
		showNumber.textContent = (this.index + 1) + '/' + (this.lengthArray) ;
		},
	
	goNext: function () {
		if (this.index == this.lengthArray-1) {showNumber
			this.index = 0;
		} else {
			this.index ++;
		}

		this.imgSlider.src = this.galery[this.index];

		this.show();
	},

	goBack: function () {
		if (this.index == 0) {
			this.index = this.lengthArray-1;
		} else {
			this.index --;

		}

		this.imgSlider.src = this.galery[this.index];
		this.show();
	}
};

// end prototype

var g = new slider(
['img/at(1).jpg', 'img/at(2).jpg', 'img/at(3).jpg', 'img/at(4).jpg', 'img/at(5).jpg', 'img/at(6).jpg',],
'imgSlider',
'next',
'back',
'showNumber',
); //instance of the slider

// change img after click back
back.addEventListener('click', function () {
	g.goBack();
});
// end change img after click back

// change img after click next
next.addEventListener('click', function () {
	g.goNext();
});
// end change img after click next

g.show();
