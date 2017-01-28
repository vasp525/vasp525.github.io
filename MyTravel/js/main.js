"use strict";


$(document).ready(function(){

	//Slick
	$('#slider').slick({
  		infinite: true,
  		speed: 500,
  		slidesToShow: 1,
  		autoplay: true,
  		autoplaySpeed: 3000,
  		centerMode: true,
  		variableWidth: true
      });

  // Contact Me

  runContact($('#animal'), $('.social'), $('#contact-me'));
	
});

