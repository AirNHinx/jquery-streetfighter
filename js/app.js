$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
  		playHadouken();    
  		$(".ryu-ready").hide();
  		$(".ryu-throwing").show();
  		$(".hadouken").finish().show()
  		.animate(
    		{"left": '300px'},
    		500,
    		function() {
      			$(this).hide();
      			$(this).css("left", "-210px");
    		}
  		);
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
	$(document).keydown(function(event) {
		if (event.which == 88) {
			playRocky();   
    		$(".ryu-ready").hide();
     		$(".ryu-still").hide();
     		$(".ryu-cool").show();
    	}   
  	});
  	$(document).keyup(function(event) {
    	if (event.which == 88) {
    		$("#rocky-sound")[0].pause();
      		$(".ryu-cool").hide();
      		$(".ryu-still").show();
    	}
 	});	
});

function playHadouken () {
 	$("#hadouken-sound")[0].volume = 0.4;
 	$("#hadouken-sound")[0].load();
 	$("#hadouken-sound")[0].play();
}

var rockySound = false;
	function playRocky () {
		rockySound= !rockySound;
		if(rockySound) {
  		$("#rocky-sound")[0].volume = 0.4;
  		$("#rocky-sound")[0].pause();
  		$("#rocky-sound")[0].play();
  	}
}

