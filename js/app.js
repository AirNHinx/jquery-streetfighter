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
		console.log("mousedown");
		// play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		.animate(
			{"left":"300px"},
			500,
			function() {
				$(this).hide();
				$(this).css("left","-210");
		});
	})
	.mouseup(function() {
		console.log("mouseup")
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
});

