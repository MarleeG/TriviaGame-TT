const log = console.log;
// questions: https://animalcorner.co.uk/insect-quiz/

$(() => {


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


    // Next: Create a timer
    var seconds = 5;

    var timer = setInterval(timeDecreased, 1000);

    // this function will execute the actions needed during the time the timer is greater or equal to 0
    function timeDecreased(){
        // log(seconds);
        seconds--;

        // this will stop the timer once it reaches 0
        seconds === 0 ? clearInterval(timer): null;
    }


    // Format the UI


    // then display timer on the UI
    // display the questions on the UI
    // display options on the UI
   

}); 