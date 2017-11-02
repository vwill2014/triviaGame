// 

// For fun, set a timer on the pictures of Durant so they rotate through a series of pictures as a person plays the game.

	$(function(){

	var images = ["assets/images/kevin_durant.jpg", "assets/images/kevin5.jpg", "assets/images/kevin3.jpg", "assets/images/kevin2.jpg","assets/images/kevin6.jpg"];
	var showImage;
	var count = 0;

	$("#start").click(startSlideShow);

	function displayImage(){

//this function allows me to replace the images within my array. It allows me to 
// to do this by changing the src attribute to point to the image[count]. This is 
// where my images live.

	$("#kevinCol").attr("src", images[count]);

console.log(images[count]);
	}
	
	function nextImage (){

	count++;

	if (count === images.length){

		count = 0;
	
	}

displayImage()

}
  function startSlideShow(){

  	showImage = setInterval(nextImage, 5000);

  }

  function stopSlideshow(){

  	clearInterval(showImage);

  }

  displayImage();
});

	
 // trivia question code========================================

// This Trivia quizz is based on True or False questions.
// 1. Create a start button that alerts for the first question to appear and starts that 10 sec timer for that question.
// 2. create 5 questions with an array of question and correct answer that displays randomly.
// 2. For each question create a button for false and button for true.
// 5. Create a rule that states when answer === false html displays "Loser"
// 6. Create a rule that states when answer === true display displayed in the array for each question
// 
// // 
// 	var questionAnswer =[
// 	{"question":"Durant begain wearing #35 as his jersey number in honor of his AAU coach Charles Craig, who was murdered at the age of 35.",
// 	"answer": "true"},

// 	{"question":"In the 2007 NBA draft, Durant was the first overall pick."
// 	"answer" : "false"
// 	},

// 	{"question":"Durant played 9 seasons with the Oklahoma Thunders.",
// 	"answer"= "true"},

// 	{"question":"Durant describes himself as a 'high shcool kid.' ",
// 	"answer"= "true"},

// 	{"question":"Durant’s jersey seldom ranks as one of the NBA’s best-selling and he is consistently one of the top All-Star vote-getters.",
// 	"answer"= "false"},
// ]






// 	var selection = content[Math.floor(Math.random()questionAnswer.length)]''
// 	questions[2] = [];
// 	questions[3] = ["Durant played 9 seasons with the Oklahoma Thunders."];
// 	questions[4] = ["Durant describes himself as a 'high shcool kid'."];
	

	
// 	// var randomQuestions = Math.floor(Math.random()[questions.length] + 1);
// 	// console.log(randomQuestions);

// $("#start").click(function(){

// $("#questions").html(questions[2]);

// 	// for(var i = 0; i<questions.length; i++){

// 	});
// // I need to make the below code generate the questions above randomly.
// // Where I currently have questions[3]is where I need to put the Math.floor(Math.random) for my array
// // I am having trouble with the syntax of doing that


// // $("#questions").html(Math.floor(randomQuestion);

// });









// $("#questions").html( = "question " + (position+1) + "  of" + " 10";
//     question = questions[position] [0];
//     chA =questions[position] [1];
//     chB =questions[position] [2];
//     chC=questions[position] [3];
//     chD = questions[position] [4];
//     test.innerHTML = "<h3>" + question + "</h3>"; 
//     test.innerHTML +="<input type='radio' id='choices' value='A'> "+chA+"<br /> ";
//     test.innerHTML +="<input type='radio' id='choices' value='B'> "+chB+"<br /> ";
//     test.innerHTML +="<input type='radio' id='choices' value='C'> "+chC+"<br /> ";
//     test.innerHTML +="<input type='radio' id='choices' value='D'> "+chD+"<br /> ";
//     test.innerHTML += "<button onclick='checkAnswer ()'> Submit Answer</button>)";)

//     }
// function checkAnswer() {
//     choices = document.getElementById("choices");
//     for (var i = 0; i < choices.length; i++){
//         if (choices [i].checked){
//             choices = choices [i].value; 
//     }
// }
// if (choice === questions[position][5]){
//      correct ++;