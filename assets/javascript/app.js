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

  	showImage = setInterval(nextImage, 10000);

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
// 6. Create a rule that states when answer === true html displays "You're Write"
// 
// // 	
// var qCounter = 0;
// var answerCounter = 1;

// 	var questionAnswer = {
// 	 	q1:"Durant begain wearing #35 as his jersey number in honor of his AAU coach Charles Craig, who was murdered at the age of 35.",
// 		a1:"true",
// 		q2:"In the 2007 NBA draft, Durant was the first overall pick.",
// 		a2:"false",
// 		q3: "Durant played 9 seasons with the Oklahoma Thunders.",
// 		a3:"true",
// 		q4: "Durant describes himself as a 'high shcool kid.'",
// 		a4: "true",
// 		q5: "Durant’s jersey seldom ranks as one of the NBA’s best-selling.",
// 		a5: "false"
// 	};

// 	$("#start").(function(){
// 	$("#questions").text(questionAnswer.q2);

// 		// questionAnswer[1] = ,"false";
	
// 		// questionAnswer [2] = ".", "true";

// 		// questionsAnswer [3] = , "true";
	
// 		// questionAnswer [4] = , "false";

// });	
// 	// S
// 	// 	else if (questionAnswer.a1 === "false"){


// 	// 		$("#false").attr("type", "Great Job!!!");

// 	// 	}

// 	// };
	
// // $("#start").click(function(){

// // $("#questions").text(questionAnswer.q1)
// //  // qCounter++;
// // });

	

// // write a function called check answer outside of my click.
// // If statement within my check answer function
// // $(id).text() this will reseach this
		
	
	
// // 	});
// // // I need to make the below code generate the questions above randomly.
// // // Where I currently have questions[3]is where I need to put the Math.floor(Math.random) for my array
// // // I am having trouble with the syntax of doing that


// // // $("#questions").html(Math.floor(randomQuestion);

// // });


// }
	
	
	var questions = ["In the 2007 NBA draft, Durant was the first overall pick.", "Durant played 9 seasons with the Oklahoma Thunders.", "Durant begain wearing #35 as his jersey number in honor of his AAU coach Charles Craig, who was murdered at the age of 35.", "Durant’s jersey seldom ranks as one of the NBA’s best-selling.","Durant describes himself as a 'high shcool kid.'"];
	var showQuestions;
	var countTwo = 0;

	$(this).click(displayQuestions);
	
	function displayQuestions(){

//this function allows me to replace the images within my array. It allows me to 
// to do this by changing the src attribute to point to the image[count]. This is 
// where my images live.

	$("#questions").text(questions[countTwo]);
console.log (questions[countTwo]);
	}
	
	function nextQuestions (){

	countTwo++;

	if (countTwo === questions.length){

		countTwo = 0;
	
	}

displayQuestions()

}
  function startSlideShowTwo(){

  	showQuestions = setInterval(nextQuestions, 10000);

  }

  function stopSlideShowTWo(){

  	clearInterval(showQuestions);

  }

  displayQuestions();

// var counter = {




// 	}
// 	setTimeout(tenSeconds, 1000 * 10);
// 	function tenSeconds(){ 

// 		$("#timer").text("00:00")


// 	}
	
// 	timeConverter: function(t) {

//     var seconds = t - (minutes * 10);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
