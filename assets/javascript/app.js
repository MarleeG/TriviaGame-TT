const log = console.log;
// questions: https://animalcorner.co.uk/insect-quiz/

$(() => {
    // The user will start off with the following seconds to answer the question
    var seconds = 5;
    var start_button_text = "Start";

    // Stores all answers, questions, and options
    var quesstionsAndAnswers = [
        {
            question: "Ants eat a sweet fluid called honey dew, where does this fluid come from?",
            options: ["Flowers", "Aphids", "Trees"],
            answer: "Aphids"
        },
        {
            question: "How do bees obtain nectar from flowers?",
            options: ["Scraping it with their antennae", "Using their feet", "Using their probocsis"],
            answer: "Using their probocsis"
        },
        {
            question: "What order do beetles belong to?",
            options: ["Lepidoptera", "Coleoptera", "Odonata"],
            answer: "Coleoptera"
        },
        {
            question: " What is a butterfly before it becomes a butterfly?",
            options: ["Millipede", "Worm", "Caterpillar"],
            answer: "Caterpillar"
        }
    ];

    // Initial functions and values to be executed/displayed
    var currentQuestion = 0;

    // This will assign the current value of the selected radio option to the userSelection variable
    var userSelection = "";

    // Hide the contents of the game in the beginning 
    $(".game").hide();
    $("#start_game_btn").text(start_button_text);


    // Every second the timeDecresed function will execute
    var timer = setInterval(timeDecreased, 1000);

    // this function will execute the actions needed during the time the timer is greater or equal to 0
    function timeDecreased() {
        // $("#seconds").text(seconds);

        // this will stop the timer once it reaches 0
        seconds === 0 ? clearInterval(timer) : null;

        // log(seconds);
        $("#seconds").text(seconds);
        seconds--;
    }


    // create a start button that displays the quiz
    $("#start_game_btn").click(() => {
        // On the click of the start button...

        // hide start button
        $("#start_game_btn").hide();

        // display quiz
        $(".game").show();


        // execute a function that displays the questions
        displayQuestion(quesstionsAndAnswers[currentQuestion]);
    });


    // create a function that displays the first question
    function displayQuestion(currentQuestionData) {
        var question = currentQuestionData.question;
        var options = currentQuestionData.options;
        var answer = currentQuestionData.answer;

        // display question 
        $("#question").text(question);


        for(var a = 0; a < options.length; a++){
            var opt = options[a];

            // other ways to qrite the input variable: 
            // var input = `<input type="radio" name="option" value=${opt}>${opt}</input><br/>`;
            // var input = "<input type='radio' name='option' value='" + opt + "'>" + opt + "</input><br/>";

            // this will store the radio option for each of the available options
            var input = "<label><input type='radio' name='option' value='" + opt + "'/>" + opt + "</label><br/>";

            // $("div.options").append(radio_input);
            $(".options").append(input);
        }
    }

    // This event listens to any changes and updates the user's selection and assigns it to the userSelection variable
    $('form.options').on('change', (e) => {
        userSelection = e.target.value;
        log(userSelection);
    });

    // NEXT: CREATE A NEXT BUTTON - DONE
    // NEXT: Next button created. Add button lister to button#next-question-btn - DONE

    $('button#next-question-btn').bind('click', e => {
        log('next question clicked');

        // NEXT: DISPLAY NEXT QUESTION

    });
    

    // when clicked ensure it clears out the value of userSelection and set it to ""


    // NEXT: GO TO THE NEXT QUESTION AUTOMATICALLY IF TIMER EQUALS 0




    // display the questions on the UI
    // display options on the UI


}); 