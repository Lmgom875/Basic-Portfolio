$(document).ready(function () {
	//rendePhoto();
	flipcard();

	//<<<<Variables>>>>\\



	//<<<<Function>>>>\\

	function flipcard() {
		var photoHeight = ($(".mix-photo").height());
		var cardTitle = ($("#card-title-front").height());
		var cardContent = ($("#card-content-front").height());
		var bodyHeight = cardTitle + cardContent + 35;
		var cardHeight = photoHeight + bodyHeight + 10;
		console.log("card-title " + cardTitle);
		console.log("card-content " + cardContent);
		console.log("body-height " + bodyHeight);
		console.log("card-height " + cardHeight);
		$(".card-body").attr("style", "height: " + bodyHeight + "px !important");
		$("#card-bodyBack-row").attr("style", "height: " + bodyHeight + "px !important");
		$(".card").attr("style", "height: " + cardHeight + "px !important");

		$(".card").flip({ axis: 'y', });
	}

	function rendePhoto() {
		var cardImg = $("<img src= 'http://placehold.it/239x200' class= 'mix-photo' alt= 'mix-photo'/>");
		var cardImg2 = $("<img src= 'http://placehold.it/239x200' class= 'mix-photo' alt= 'mix-photo'/>");
		var cardDesc = $("<div class= 'photo-text col mx-auto d-block'>").text("Photo Desc Front");
		var cardDesc2 = $("<div class= 'photo-text col mx-auto d-block'>").text("Photo Desc Back");
		var cardFront = $("<div class= 'front card-front' id= 'card-front'>");
		var cardBack = $("<div class= 'back card-back' id= 'card-back'>")
		var cardIcon = $("<i class= 'fas fa-github'>");
		var card = $("<div class= 'card no-gutters col-sm-12 col-md-6 col-lg-4 col-xl-3'>")
		cardFront.append(cardImg);
		cardFront.append(cardDesc);
		card.append(cardFront);
		cardBack.append(cardImg2);
		cardBack.append(cardDesc2);
		card.append(cardBack);
		$("#photo-line").append(card);
	}



	//<<<<Events>>>>\\

	$(".card").click(function () { flipcard() });

});
