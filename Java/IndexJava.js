$(document).ready(function () {
	rendePhoto();
	flipcard();

	//<<<<Variables>>>>\\

	var proyects = [
		{
			title: "Code Quiz",
			description: "Short multi-selection quiz from Star Wars facts, with timer and score.",
			photo: "../assets/images/CodeQuiz.PNG",
		}, {
			title: "Password Generator",
			description: "Web app to generate randoms password with the criteria selected.",
			photo: "../assets/images/PasswordGenerator.PNG",
		}, {
			title: "Day Planner",
			description: "Small web app to store events in selected time lap (localy).",
			photo: "../assets/images/DailyPlanner.PNG",
		}, {
			title: "Weather Dashboard",
			description: "Web app with a external API service that say the now weather and the forecast for the next five days.",
			photo: "../assets/images/WeatherDashboard.PNG",
		}];

	//<<<<Function>>>>\\

	function flipcard() {
		var photoHeight = ($(".mix-photo").height());
		var cardTitle = ($("#card-title-front").height());
		var cardContent = ($("#card-content-front").height());
		var bodyHeight = cardTitle + cardContent + 35;
		var cardHeight = photoHeight + bodyHeight + 10;
		$(".card-body").attr("style", "height: " + bodyHeight + "px !important");
		$("#card-bodyBack-row").attr("style", "height: " + bodyHeight + "px !important");
		$(".card").attr("style", "height: " + cardHeight + "px !important");

		$(".card").flip({ axis: 'y', });
	}

	function rendePhoto() {
		var cardPhotoFront = $("<img src= 'http://placehold.it/283x200' class= 'mix-photo card-img-top' alt= 'mix-photo'/>");
		var cardPhotoBack = $("<img src= 'http://placehold.it/283x200' class= 'mix-photo card-img-top' alt= 'mix-photo'/>");
		var cardBodyFront = $("<div class= 'card-body' id= 'card-body-front'>");
		var cardBodyBack = $("<div class= 'card-body' id= 'card-body-back'>");
		var cardTitle = $("<div class= 'card-title text-center' id= 'card-title-front'>");
		var cardContent = $("<div class= 'card-content' id= 'card-content-front'>");
		var cardRowBack = $("<div class= 'row no-gutters align-items-center justify-content-around' id= 'card-back-row'>");
		var cardGithubIcon = $("<a href= 'http://github.com' target= '_blank'><img src= './assets/images/icons8-github-120.png' id= 'github-image' alt= 'Github Icon'>");
		var cardInternetIcon = $("<a href= 'http://google.com/' target= '_blank'><img src= './assets/images/icons8-internet-100.png' id= 'internet-image' alt= 'Internet Icon' >");
		var cardFront = $("<div class= 'front'>");
		var cardBack = $("<div class= 'back'>")
		var card = $("<div class= 'card col-sm-12 col-md-12 col-lg-3 col-xl-3'>")
		card.append(cardFront);
		cardFront.append(cardPhotoFront);
		cardFront.append(cardBodyFront);
		cardBodyFront.append(cardTitle);
		cardBodyFront.append(cardContent);
		card.append(cardBack);
		cardBack.append(cardPhotoBack);
		cardBack.append(cardBodyBack);
		cardBodyBack.append(cardRowBack);
		cardRowBack.append(cardGithubIcon);
		cardRowBack.append(cardInternetIcon);
		$("#photo-line").append(card);
	}



	//<<<<Events>>>>\\

	$(".card").click(function () { flipcard() });

});
