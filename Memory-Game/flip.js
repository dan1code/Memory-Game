$( document ).ready(function() {

var counter = 0;
var newgame = 0;

  $('.flip').click(function(){
     $(this).find('.card').addClass('flipped');
	 counter++;
	 newgame++;
	 if (counter == 2){
			setTimeout(function() {$('.card').removeClass('flipped')}, 1500);
			counter = 0;
      }
/*
   if (newgame === 10) {
     var ul = document.querySelector('ul');
     for (var i = ul.children.length; i >= 0; i--) {
         ul.appendChild(ul.children[Math.random() * i | 0]);
       };
		}; */
	});
});
