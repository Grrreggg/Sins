console.log('%c Hrucheba','color:green;');

var ctrl_right, ctrl_left
var imgs = []
var current_image_n = 0
init()
function init(){
	ctrl_left = document.getElementById('ctrl_left')
	ctrl_right = document.getElementById('ctrl_right')

	ctrl_left.onclick = function() {
		switch_tab(false)
		clearInterval(timer);

		timer = setInterval(function() {
			switch_tab(true)
		}, 2000);
	}
	ctrl_right.onclick = function() {
		switch_tab(true)
		clearInterval(timer);

		timer = setInterval(function() {
			switch_tab(true)
		}, 2000);
	}

	for (i=0; i<=31; i++){
		imgs.push(document.getElementById('image_'+i))
	}
	switch_tab(true)
	var elem = document
	if (elem.addEventListener) {
		if ('onwheel' in document) {
		  elem.addEventListener("wheel", onWheel);
		} else if ('onmousewheel' in document) {
		  elem.addEventListener("mousewheel", onWheel);
		} else {
		  elem.addEventListener("MozMousePixelScroll", onWheel);
		}
	  } else { 
		elem.attachEvent("onmousewheel", onWheel);
	  }
	  
	  function onWheel(e) {
		clearInterval(timer);
		e = e || window.event;
		timer = setInterval(function() {
			switch_tab(true)
		}, 4000);
	  
		var delta = e.deltaY || e.detail || e.wheelDelta;
	  
		switch_tab(delta>0)
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	  }
}

function switch_tab(forward) {
	if (forward == true) {
		current_image_n ++
		if (current_image_n > 31){
			current_image_n = 0
		}
	}else{
		current_image_n --
		if (current_image_n < 0){
			current_image_n = 31
		}	
	}
	imgs.forEach(function(img) {
		img.style.display = 'none'
	});
	imgs[current_image_n].style.display = 'block'
}

var timer = setInterval(function() {
	switch_tab(true)
}, 2000);

window.onload = function () {
	document.getElementById('preloader').style.display = 'none'
}