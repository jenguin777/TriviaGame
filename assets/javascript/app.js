$(document).ready(function () {

    //Define global variables
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit-answers');
    //This is our array of questions. We'll store the question, its possible answers, and the correct answer
    var myQuestions = [
        {
          question: "What is the largest freshwater lake in the world?",
          answers: {
            a: "Lake Ontario",
            b: "Lake Superior",
            c: "Lake Erie",
            d: "Lake Michigan"
          },
          correctAnswer: "b"
        },
        {
          question: "Where would you find the Sea of Tranquility?",
          answers: {
            a: "Fantasy Island",
            b: "The moon",
            c: "Oahu",
            d: "Italy"
          },
          correctAnswer: "b"
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
        },
        {
            question: "What kind of weapon is a falchion?",
            answers: {
              a: "battle axe",
              b: "crossbow",
              c: "A sword"
            },
            correctAnswer: "c"
          },
          {
            question: "What is the seventh planet from the sun?",
            answers: {
              a: "Venus",
              b: "Neptune",
              c: "Uranus",
              d: "Jupiter"
            },
            correctAnswer: "c"
          },
          {
            question: "Name the world's biggest island.",
            answers: {
              a: "Iceland",
              b: "Great Britain",
              c: "Greenland",
              d: "New Guinea"
            },
            correctAnswer: "c"
          },
          {
            question: "What colour is Absynthe?",
            answers: {
              a: "Blue",
              b: "Clear",
              c: "Yellow",
              d: "Green"
            },
            correctAnswer: "d"
          },
          {
            question: "How many crocus flowers does it take to make a pound of saffron?",
            answers: {
              a: "75,000 flowers",
              b: "2500 flowers",
              c: "10,000 flowers",
              d: "50,000 flowers"
            },
            correctAnswer: "a"
          },
          {
            question: "What flavour is Cointreau?",
            answers: {
              a: "Cherry",
              b: "Lavender",
              c: "Orange",
              d: "Mint"
            },
            correctAnswer: "c"
          },
          {
            question: "When did the Cold War end?",
            answers: {
              a: "1992",
              b: "1989",
              c: "1972",
              d: "2001"
            },
            correctAnswer: "b"
          },
          {
            question: "When was the euro introduced as legal currency on the world market?",
            answers: {
              a: "2005",
              b: "1986",
              c: "1999",
              d: "1997"
            },
            correctAnswer: "c"
          },
          {
            question: "Basilosaurus a beast that lived before us but after the dinosaurs, evolved into which current day animal?",
            answers: {
              a: "Camel",
              b: "Elephant",
              c: "Whale"
            },
            correctAnswer: "c"
          },
          {
            question: "The 'White Way of Delight' is the given name of a place in what children's book series?",
            answers: {
              a: "Chronicles of Narnia",
              b: "Harry Potter",
              c: "Anne of Green Gables"
            },
            correctAnswer: "c"
          },
          {
            question: "Which of the following words is defined as 'the ability of a liquid to resist flowing'?",
            answers: {
              a: "Pourability",
              b: "Viscosity",
              c: "Fluidity"
            },
            correctAnswer: "b"
          },
          {
            question: "Which of these hit toys was NOT popular in the 1970s?",
            answers: {
              a: "Rock'em Sock'em Robots",
              b: "Evil Knievel Motorcycles",
              c: "Transformers"
            },
            correctAnswer: "c"
          },
      ];

    function buildIntro () {
        //When you enter the page, hide the article, which contains time-remaining, quiz, and submit-answers
        $("article").hide();
            //When the user clicks the Start button, the instructions card should disappear and the quiz and submit button should appear.
            $("#start-hide").click(function(){
                $(".card").hide();
                $("#start-hide").hide();
                $("article").show();
        });
    }
    
    function buildQuiz(){
        // we'll need a place to store all of the HTML output 
        var output = [];

        // For each is called for each element in our array, currentQuestion is the "question" (actual question) in our myQuestions array, questionNumber is the index
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices 
            var answers = [];

            // Now for all of the answers 
            for (var letter in currentQuestion.answers){

                // Add HTML radio buttons for our answers...added styling for spacing in style.css
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add each question and its answers to the output- this is cool
            output.push(
                `<div class="question"> ${currentQuestion.question} </hr></div>
                <div class="answers"> ${answers.join('')} </div>`
            );
            }
        );

        // Now combine our output list into one string of HTML and put it on the page - this is cooler
        quizContainer.innerHTML = output.join('');
    }

    function startTimer () {
        // Foghorn .wav file will play when time is up
        var audio = new Audio("./assets/sounds/Fog_Horn-Mike_Koenig-338144864.wav");

        //  Step 2: Set countdown timer to 45 seconds
        var timeleft = 45; //# of seconds
        var timer = setInterval(function(){
        timeleft--;
        //display timeleft in #time-remaining
        //document.getElementById("time-remaining").textContent = timeleft;  //not sure if I like this, is there a jQuery way to do this?
        $("#time-remaining").html("<p>" + timeleft + " seconds</p>"); 
    
        //Once the timer gets to 0, stop the timer via clearInterval()
        if(timeleft <= 0) {
            clearInterval(timer);
            timeleft = 45; //reset to 45
            // The following line will play the audio file we linked to above.
            audio.play();
            timeUp();
            }
        }, 1000); 
    }

    function timeUp() {

        // in the element with an id of time-remaining add a p saying Time's Up!
        // console log done
        $('#time-remaining').html("<p>Time's up!</hr>");
          console.log("done");
          showResults();
      }

    function hideQuiz() {
            //When the user clicks the Submit Answers button, hide time-remaining, submit-answers, and quiz. Then show results.
            $("#submit-answers").click(function(){
                $("#submit-answers").hide();
                showResults();
        });
    }

    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers','.correctAnswer');

        // keep track of user's answers
        var numCorrect = 0;

        // for each question...
        var currentQuestion = [];
        var questionNumber = 0;

        //replaces for loop
        myQuestions.forEach( (currentQuestion, questionNumber) => {

            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = 'input[name=question'+questionNumber+']:checked';
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if(userAnswer===currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' correct out of ' + myQuestions.length;
        }

            buildIntro();
            buildQuiz();
            startTimer();
            hideQuiz();
            
});