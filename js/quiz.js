  //This is the script for 28 questions
  // scripts here:

  function submitQuiz() {
	console.log('submitted');

  // get each answer score
	function answerScore (qName) {
	  var radiosNo = document.getElementsByName(qName);

	  for (var i = 0, length = radiosNo.length; i < length; i++) {
		  if (radiosNo[i].checked) {
	  // do something with radiosNo
		  var answerValue = Number(radiosNo[i].value);
		}
	  }
	  // change NaNs to zero
	  if (isNaN(answerValue)) {
		answerValue = 0;
	  }
	  return answerValue;
	}

  // calc score with answerScore function
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
  console.log("CalcScore: " + calcScore); // it works!

    

   // Add additional scores in here.
    
 // calculate "possible score" integer
 var questionCountArray = document.getElementsByClassName('question');

 var questionCounter = 0;
 for (var i = 0, length = questionCountArray.length; i < length; i++) {
   questionCounter++;
 }

// show score as "score/possible score"
 var showScore = "Your Score: " + calcScore +"/" + questionCounter;
// if 4/4, "perfect score!"
 if (calcScore === questionCounter) {
   showScore = showScore + "&nbsp; <strong>Perfect!</strong>"
 };
 document.getElementById('userScore').innerHTML = showScore;
}

function revealAnswer() {

    document.getElementById("correctString1").style.color = "#CD2E3A";
    document.getElementById("correctString2").style.color = "#CD2E3A";
    document.getElementById("correctString3").style.color = "#CD2E3A";
    document.getElementById("correctString4").style.color = "#CD2E3A";
  
    
}

$(document).ready(function() {

$('#submitButton').click(function() {
 $(this).addClass('hide');
});



});

