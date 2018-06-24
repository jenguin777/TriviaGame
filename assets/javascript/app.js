$(document).ready(function () {

    //Define global variables
    // var questionsAnswers [];

    $("submit-answers").hide();

    //When the user clicks the Start button, the instructions card should disappear and the quiz and submit button should appear.
    $("#hide").click(function(){
        $(".card").hide();
        $("hide").hide();
        $("time-remaining").show();
        $("quiz").show();
        $("submit-answers").show();
    });

    $("#submit-answers").click(function(){
        $("time-remaining").hide();
        $("submit-answers").hide();
        $("quiz").hide();
        $("results").show();
    });




































});