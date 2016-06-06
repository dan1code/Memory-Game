$( document ).ready(function() {

var counter = 0;

  $('.flip').click(function(){
     $(this).find('.card').addClass('flipped');
	 counter++;
		if (counter == 2){
			setTimeout(function() {$('.card').removeClass('flipped')}, 1500);
			counter = 0;
		}
	});
});


