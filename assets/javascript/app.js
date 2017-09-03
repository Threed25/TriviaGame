//Trivia Game Javascript

//Trivia Game header with Start Button underneath.
//Once you click the Start Button show question 1 and start timer.

//All questions in array.
//All 4 multiple choice options in another array? 
//30 seconds to answer question. Timer = Shot Clock in basketball.
	
//If timer < 1. The player is wrong. wrong++ and show the correct answer
//If playerChoice = answer and timer > 0.  correct++ and show correct! screen

//Final Screen
//Create Scoreboard with right variable as points for home team A.K.A. the player. and wrong answers as points for the away team.
//Play again? option that doesn't require reset of browser.

//BONUS: Maybe give players the option to shoot a 3 pointer (harder question more points) if they are "losing".
//Maybe make all the questions random every time with a big array of questions.

//Play basketball themed music with sound icon in bottom left of jumbotron? If you click it, mute music. Click again, music on.


var startGameBtn = $("#start-game");

var questions = ["Which player holds the NCAA record for points per game in a career at 44.2 points per game?", "Who is the best basketball player ever?", "Who has the most assists in NBA History?"];

var answerOptions = [
["Jimmer Fredette", "Rick Barry", "Pete Maravich", "Stephen Curry"],
["Wilt Chamberlain", "Larry Bird", "LeBron James", "Michael Jordan"],
["John Stockton", "Steve Nash", "Magic Johnson", "Jason Kidd"]];

var correctAnswers = ["Pete Maravich","Michael Jordan","John Stockton"];

var intervalId;

var a = 0;

var q = 0;

var correctTotal = 0;
var wrongTotal = 0;

var userGuess = "";

var userStatus = "";

var option1 = $("#answer1");
var option2 = $("#answer2");
var option3 = $("#answer3");
var option4 = $("#answer4");

var timer = {

	time: 30,

	reset: function() {

		timer.time = 30;

		$("#shot-clock").html("30");
	},

	start: function() {
		intervalId = setInterval(timer.count, 1000);
	},

	count: function() {
		timer.time--;
		$("#shot-clock").html(timer.time);

	}
}




var userChoice = {



	one: function() {

		var userGuess = answerOptions[q][0];

		var correctAnswer = correctAnswers[q];

		if(userGuess === correctAnswer) {
			correctTotal++;
			console.log("You were correct!");
			

		} else {
			wrongTotal++;
			console.log("You were wrong!");
		}
	},

	two: function() {

		var userGuess = answerOptions[q][1];

		var correctAnswer = correctAnswers[q];

		if(userGuess === correctAnswer) {
			correctTotal++;
			console.log("You're right. You guessed" + userGuess + ". Which is Option #2.");

		} else {
			wrongTotal++;
			console.log("You're wrong. You guessed" + userGuess + ". Which is Option #2.");

		}

	},

	three: function() {

		var userGuess = answerOptions[q][2];

		var correctAnswer = correctAnswers[q];

		if(userGuess === correctAnswer) {
			correctTotal++;
			
			rightOrWrongScreen();
			

		} else {
			wrongTotal++;
			console.log("You're wrong. You guessed" + userGuess + ". Which is Option #3.");
		}

	},

	four: function() {

		var userGuess = answerOptions[q][3];

		var correctAnswer = correctAnswers[q];

		if(userGuess === correctAnswer) {
			correctTotal++;
			console.log("You're right. You guessed" + userGuess + ". Which is Option #4.");
			q++;
			answersShow();

		} else {
			wrongTotal++;
			console.log("You're wrong. You guessed" + userGuess + ". Which is Option #4.");
		}

	}


};

function answersShow() {

	$(".right_or_wrong").hide();

	$(".content-area").show();
	

	$("#question-area").html("<p>" + questions[q] + "</p>");

	var a = 0

	function workPlease() {
		if (a === 0) {
			$("#answer1").html("<p>" + answerOptions[q][0] + "</p>");
			a++;
		}
		if (a === 1) {
			$("#answer2").html("<p>" + answerOptions[q][1] + "</p>");
			a++;
		}

		if (a === 2) {
			$("#answer3").html("<p>" + answerOptions[q][2] + "</p>");
			a++;
		}
		if (a === 3) {
			$("#answer4").html("<p>" + answerOptions[q][3] + "</p>");
		}
	}

	answerOptions[q].forEach(workPlease);
};

function rightOrWrongText() {
	var go = answersShow();

	$(".user_guess").html("<p>You were " + userStatus +"!</p>");
	$(".correct_answer").html("<p>The correct answer was: " + correctAnswers[q] + "</p>");
	// var a = 0;

	setTimeout(go, 4000);

};

function rightOrWrongScreen() {

	$("#shot-clock").empty();
	$("#question-area").empty();
	$("#answer1").empty();
	$("#answer2").empty();
	$("#answer3").empty();
	$("#answer4").empty();
	$(".content-area").hide();
	rightOrWrongText();

	$(".right_or_wrong").show();



};

window.onload = function() {
	$(".right_or_wrong").hide();
	$("#answer-options").hide();
};

option1.on("click", userChoice.one);
option2.on("click", userChoice.two);
option3.on("click", userChoice.three);
option4.on("click", userChoice.four);








function gameStart() {
	
	answersShow();

};



// function nextQuestion() {

// 	$("question-area").html("<p>" + questions[n] + "</p>");
// }



startGameBtn.on("click", function(){
	startGameBtn.hide();
	$("#answer-options").show();
	gameStart();
	timer.reset();
	timer.start();
})

