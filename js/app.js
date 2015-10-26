$(document).ready(function() {
	//alert("hey!");

	$("button#click").on("click", function() {
		$("img#droid-dance").show();
		$(this).css("margin-top", "20px");

	});

});