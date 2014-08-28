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
	$(document).on("keydown", function(event) {
		if(event.which == 88) {
			event.preventDefault();
			}
			xTriggered++;
			var msg = ".main" + xTriggered + "1";	
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
});

function playHadouken () {
  $("#hadouken-sound")[0].volume = 0.4;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}

