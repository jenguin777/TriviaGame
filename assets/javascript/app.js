$(document).ready(function () {

    //Define global variables
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    var myQuestions = [
        {
          question: "Who is the strongest?",
          answers: {
            a: "Superman",
            b: "The Terminator",
            c: "Waluigi, obviously"
          },
          correctAnswer: "c"
        },
        {
          question: "What is the best site ever created?",
          answers: {
            a: "SitePoint",
            b: "Simple Steps Code",
            c: "Trick question; they're both the best"
          },
          correctAnswer: "c"
        },
        {
          question: "Where is Waldo really?",
          answers: {
            a: "Antarctica",
            b: "Exploring the Pacific Ocean",
            c: "Sitting in a tree",
            d: "Minding his own business, so stop asking"
          },
          correctAnswer: "d"
        }
      ];

    function buildIntro () {
        //When you enter the page, hide time-remaining, quiz, and submit-answers
        $("#time-remaining").hide();
        $("#quiz").hide();
        $("#results").hide();
        $("#submit-answers").hide();
            //When the user clicks the Start button, the instructions card should disappear and the quiz and submit button should appear.
            $("#start-hide").click(function(){
                $(".card").hide();
                $("#start-hide").hide();
                $("#time-remaining").show();
                $("#quiz").show();
                $("#submit-answers").show();
                startTimer();
        });
    }
    
    function buildQuiz(){
        // we'll need a place to store the HTML output
        var output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices 
            var answers = [];

            // and for each available answer...
            for (var letter in currentQuestion.answers){

                // ...add an HTML radio button
                answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function startTimer () {
        // Step 1:
        // Use the following link inside the Audio function below:
        // https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
        var audio = new Audio("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");

        //  Step 2: do the following between the --- comments

        //  after 10 seconds, execute the tenSeconds function
        setTimeout(tenSeconds, 10000);

        //  after 15 seconds, execute the timeUp function
        setTimeout(timeUp, 15000);
        // ---------------------
        // CODE STEP TWO HERE
        // ---------------------


        // Step 3:
        // Fill in the blanks to these functions.
        
        function tenSeconds() {

          // in the element with an id of time-remaining add a p saying About 5 Seconds Left!
          // console log 5 seconds left
          $('#time-remaining').html("<p>About 10 Seconds Left!</hr>");
            console.log("10 seconds left");

        }


        function timeUp() {

          // in the element with an id of time-remaining add a p saying Time's Up!
          // console log done
          $('#time-remaining').html("<p>Time's up!</hr>");
            console.log("done");

          // The following line will play the audio file we linked to above.
          //***********************Uncomment audio.play() before you submit */
          // audio.play();

        }


    }



    function showResults(){
            //When the user clicks the Submit Answers button, hide time-remaining, submit-answers, and quiz. Then show results.
            $("#submit-answers").click(function(){
            $("#time-remaining").hide();
            $("#submit-answers").hide();
            $("#quiz").hide();
            //Need to code the show results logic
            $("#results").show();
        });
    }



    buildIntro();
    buildQuiz();
    
    // showResults();
    //When the user clicks Submit Answers, call showResults function to display results to the user
    submitButton.addEventListener('click', showResults);



































});