function computeName(){
	var nameEntered = $("#nameEntered").val() ? $("#nameEntered").val() : "Du";
	var nameReverse = nameEntered.split('').reverse().join('');

	$("#nameOutput").html(nameEntered);
	$("#nameReverse").html(nameReverse);
}

$(document).ready(function(){
	$("#next").click(computeName);
});