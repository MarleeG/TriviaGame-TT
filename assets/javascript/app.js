const log = console.log;
// questions: https://animalcorner.co.uk/insect-quiz/

$(() => {
    // The user will start off with the following seconds to answer the question
    var seconds;

    var start_button_text = "Start";

    // Every second the timeDecresed function will execute
    var timer;

    var userAnswers = [];

    // Stores all answers, questions, and options
    var questionsAndAnswers = [
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
    $('#scores').hide();


    // this function will execute the actions needed during the time the timer is greater or equal to 0
    function timeDecreased() {


        $("#seconds").text(seconds);
        // log(seconds);

        seconds--;
        // this will stop the timer once it reaches 0
        //  seconds === 0 ? clearInterval(timer) : null;
        if ($('#seconds').text() == "0") {
            nextQuestion();

        }
        // play game and see fix the issue in the UI.
        // change the question in the UI once seconds equals 0
    }


    // create a start button that displays the quiz
    $("#start_game_btn").click(() => {
        // On the click of the start button...

        // hide start button
        $("#start_game_btn").hide();

        // display quiz
        $(".game").show();

        seconds = 5;


        // timer begins and deceases seconds by 1 every second
        timer = setInterval(timeDecreased, 1000);


        // execute a function that displays the questions
        displayQuestion(questionsAndAnswers[currentQuestion]);
    });

    function updateScores() {
        userAnswers.push(userSelection);
    }

    function displayScores() {
        $('#scores').show();
        let table_row = $('<tr>');

        userAnswers.forEach((val, idx) => {
            log(`${idx} :: ${val}`);

            $('table#score-table').append(table_row.append(
                `
                    <td>${questionsAndAnswers[idx].question}</td>
                    <td>${questionsAndAnswers[idx].answer}</td>
                    <td>${val}</td>
                    <td>${val === questionsAndAnswers[idx].answer ? "25 Points": "0 points"}</td>
                `
            ));

            table_row = $('<tr>');
        });

    }

    function nextQuestion() {
        clearInterval(timer);
        updateScores();

        currentQuestion++;
        // if the currentQuestion is the same value as the length then there are no more questions to display.
        if (currentQuestion === questionsAndAnswers.length) {
            // hide elements that are no longer needed to be shown at the end of the game
            $('.timer').hide();
            $('.quiz').hide();
            // DISPLAY SCORES

            displayScores();
            log(userAnswers);

        } else {
            // updates the option the user has selected as an empty string for the next question
            userSelection = "";

            seconds = 5;
            $("#seconds").text(seconds);

            // updates 
            timer = setInterval(timeDecreased, 1000);

            // this function will display the current questions data pulled from questionsAndAnswers array
            displayQuestion(questionsAndAnswers[currentQuestion]);
        }



    }


    // create a function that displays the first question
    function displayQuestion(currentQuestionData) {
        $('.options').empty();
        var question = currentQuestionData.question;
        var options = currentQuestionData.options;
        var answer = currentQuestionData.answer;

        // display question 
        $("#question").text(question);

        for (var a = 0; a < options.length; a++) {
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
    });

    // this event listener will listen to see if the user wants to proceed to the next question
    $('button#next-question-btn').bind('click', e => {
        nextQuestion();
    });

    // display the questions on the UI
}); 