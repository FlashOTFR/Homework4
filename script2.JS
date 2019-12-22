var start = $('#start');
var quiz = $('#quizzle');
var questions2 = $('#question');
var counter = $('#counter');
var choice1 = $('c1');
var choice2 = $('c2');
var choice3 = $('c3');
var choice4 = $('c4');
var result = $('result');
var score = $('score');
var count = 0;
var TIMER;
var pScore = 0;


function presentQuestion() {

    for(var i = 0; i < questions.length; i++) {

    questions2.innerHTML = "<p>" + questions[i].title + "</p>";
    choice1.innerHTML = questions[i].choices[0];
    choice2.innerHTML = questions[i].choices[2];
    choice3.innerHTML = questions[i].choices[3];
    choice4.innerHTML = questions[i].choices[4];


    }
}




function timers() {

    count = 120;
    counter.innerHTML = count;
    
    

    
    }



function checkAnswer(answer) {
    if(answer == questions[i].answer) {

    result.innerHTML = "<p>You're Right!</p>";
    } 
    
    else {

        result.innerHTML = "<p>You're Wrong!</p>";

    }
}

$('#start').on('click', startQuiz)


function startQuiz() {

    mainCont.style.display="none";
    TIMER = setInterval(--count, 1000);
    presentQuestion();
    quizzle.style.display="block";
    
}



