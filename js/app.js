$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		alert("mouse entered .ryu div");
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
})

