//global variables
var crystal = {

	blue:
	{
		name:"Blue",
		value: 0
	},

	red:
	{
		name:"Red",
		value: 0
	},

	green:
	{
		name:"Green",
		value: 0
	},

	yellow:
	{
		name:"Yellow",
		value: 0
	}
	
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var coin = new Audio();
coin.src = "assets/sounds/rupee.wav";

var fail = new Audio();
fail.src = "assets/sounds/linkdies.wav";

var victory = new Audio();
victory.src = "assets/sounds/victory.wav";



//functions

var getRandom = function(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function(){
	//set current score
	currentScore = 0;

	//change target score
	targetScore = getRandom(19, 99);

	//set values for gems
	crystal.blue.value = getRandom(1,9);
	crystal.red.value = getRandom(1,9);
	crystal.green.value = getRandom(1,9);
	crystal.yellow.value = getRandom(1,9);


	//change HTML to reflect changes
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);


	console.log("Blue: " + crystal.blue.value);
	console.log("red: " + crystal.red.value);
	console.log("green: " + crystal.green.value);
	console.log("yellow: " + crystal.yellow.value);

}

//function to add values

var addTotal = function(crystal){

	currentScore = currentScore + crystal.value

	$("#yourScore").html(currentScore);

	checkWin();

	console.log("Your score: " + currentScore);
}

var reset = function(){
	currentScore = 0;
	targetScore = 0;
	winCount = 0;
	lossCount = 0;
}


var checkWin = function(){
	if(currentScore > targetScore)
	{
		alert("You Lose!");
		console.log("You lose!");
		fail.play();
		lossCount++;
		$("#losses").html(lossCount);

		startGame();
	}

	else if(currentScore == targetScore)
	{
		alert("You win!");
		console.log("You win!");
		victory.play();
		winCount++;
		$("#wins").html(winCount);
		startGame();

	}

	if(winCount == 9)
		{
			 $("#goal").animate({opacity: '1'});
		}

	else if(lossCount == 20)
		{
		alert("You've met with a terrible fate.");
		reset();

		}

	}



//call functions
startGame();

$("#GemR").click(function(){
	addTotal(crystal.red);
	coin.play();
});

$("#GemB").click(function(){
	addTotal(crystal.blue);
	coin.play();
});

$("#GemY").click(function(){
	addTotal(crystal.yellow);
	coin.play();
});

$("#GemG").click(function(){
	addTotal(crystal.green);
	coin.play();
});