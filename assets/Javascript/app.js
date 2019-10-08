$('#start').on('click',function(){
    for(var i=0;i<questions.length;i++){ // 1st quest 
        $('#startButton').append('<h2>' + questions[i].question+'</h2>')
        for(var j=0;j<questions[i].answers.length;j++){
            $("#startButton").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'><p>" + questions[j].answers[j]+ "</p>")
        }  
    }
})
// questions for the quiz //
var questions = [{
        question : "first question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "second question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "third question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "fourth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "fifth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "Sixth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "Seventh question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "Eighth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "ninth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }, {
        question : "tenth question", 
        answers : [ "answer one", "answer two", "answer three", "answer four" ],
        correctAnswer : "correct answer"
    }];

    