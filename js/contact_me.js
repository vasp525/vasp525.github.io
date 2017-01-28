"use strict";

var runContact = function(item, button, container){

	var isHiden = false;
	var isFocused = false;
	var speedButton = 500;
	var speedItem = 3000;

	// Show/Hide Buttons

	container.hover(function(){

		// Stop Item Animate (if it is hided, it will be shown)

		if(isHiden) {
			showItem();
			setTimeout(function(){
				item.stop(true,true);
			},speedItem)
		} else {
			item.stop(true,true);
		}
		isFocused = true;

		// Show Botton

		$(button).each(function() {
			$(this).show(speedButton);
		});

	},
		function(){

			// Hide Button

			$(button).each(function() {
				$(this).hide(speedButton);
			});

			// Start Item Animate

			isFocused = false;
		}
	);
	
	// Move Item Functions

	function hideItem(){
		item.animate({
			bottom: '-70px',
			right: '-70px'
		},'slow');
	}

	function showItem(){
		item.animate({
			bottom: '-30',
			right: '-30'
		},'slow');
	}

	function animateItem() {
		setInterval(function(){
			if (!isFocused) {
				if (isHiden == false) {
					hideItem();
					isHiden = true;
				} else {
					showItem();
					isHiden = false;
				}
			}	
		}, speedItem);
	}

	// Start Item Animate

	animateItem();

};
