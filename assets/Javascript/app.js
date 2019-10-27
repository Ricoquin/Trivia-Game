var card = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
    question: "Nintendo is the Japanese word meaning..",
    answers: ["Fun Television Game", "Too much excitement", "Fun home entertainment", "Leave luck to heaven"],
    correctAnswer: "Leave luck to heaven",
    image:"images/nintendoGIF.gif"
}, {
    question: "Kenji Yamamoto composed all these games except..",
    answers: ["Mike Tyson's Punch-Out!!", "Super Smash Bros.", "Super Metroid", "Super Mario Bros."],
    correctAnswer: "Super Mario Bros.",
    image:"images/SuperMarioGIF.gif"
}, {
    question: "The most common species in World of Warcraft is ",
    answers: ["Orcs", "Humans", "Night Elves", "dwarves"],
    correctAnswer: "Humans",
    image:"images/wowHumanGIF.gif"
}, {
    question: "Who has a appeard on the most covers for EA Sports Fifa.. ",
    answers: ["Lionel Messi", "Cristiano Rinaldo", "Wayne Rooney", "Landon Donovan"],
    correctAnswer: "Wayne Rooney",
    image:"images/wayneRooneyGIF.gif"
}, {
    question: "In Uncharted's series who was his sidekick and close friend ?",
    answers: ["Harry Flynn", "Elena Fisher", "Victor Sullivan", "Charlie Cutter"],
    correctAnswer: "Victor Sullivan",
    image:"images/victorSullivanGIF.gif"
}, {
    question: "When was the first Call of Duty title released?",
    answers: ["December 1, 2003", "November 14 2003", "October 29, 2003", "July 18, 2004"],
    correctnswer: "October 29, 2003",
    image:"images/CodGIF.gif"
    // sideNote: "Most games are relased late November through Early December"
}, {
    question: "Most played game in the worldwide is ..",
    answers: ["Fortnite", "Minecraft", "World of Warcraft", "League of Legends"],
    correctAnswer: "League of Legends",
    image:"images/lolGIF.gif"
}, {
    question: "Most played gaming console in the world",
    answers: ["Android Apps", "Playstation 4", "PC", "Nintendo Switch"],
    correctAnswer: "PC",
    image:"images/gamingpcGIF.gif"
}, {
    question: "Highest grossed revenue made by what game ?",
    answers: ["PlayerUnknown's Battlegrounds", "FIFA 18", "Grand Theft Auto V", "Call of Duty: Black Ops IIII"],
    correctAnswer: "PlayerUnknown's Battlegrounds",
    image:"images/pubgGIF.gif"
}, {
    question: "The Division 2 sequal to Tom Clancy's The Division can be finished in how many hours? ",
    answers: ["35 hours", "65 hours", "40 hours", "80 hours"],
    correctAnswer: "40 hours",
    image:"images/Div2GIF.webp"
}];

//------------------TIMER FUNCTION------------------//

var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2> Great job! Lets take a look at how you did ! </h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {
     
    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Ohhhh, So Close! </h2>");
    card.append("<h3>Should have picked this one : " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};


// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>");
  game.loadQuestion();
});



