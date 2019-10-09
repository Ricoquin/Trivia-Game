$('#start').on('click',function(){
    for(var i=0;i<questions.length;i++){ // 1st quest 
        $('#startButton').append('<h2>' + questions[i].question+'</h2>')
        for(var j=0;j<questions[i].answers.length;j++){
            $("#startButton").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'><p>" + questions[i].answers[j]+ "</p>")
        }  
    }
})
// questions for the quiz //
var questions = [{
        question : "Nintendo is the Japanese word meaning..", 
        answers : [ "Fun Television Gamme", "Too much excitement", "Fun home entertainment", "Leave luck to heaven" ],
        correctAnswer : "Leave Luck to Heaven"
    }, {
        question : "Kenji Yamamoto composed all these games except..", 
        answers : [ "Mike Tyson's Punch-Out!!", "Super Smash Bros.", "Super Metroid", "Super Mario Bros." ],
        correctAnswer : "Super Mario Bros."
    }, {
        question : "The most common species in World of Warcraft is ", 
        answers : [ "Orcs", "Humans", "Night Elves", "dwarves" ],
        correctAnswer : "Humans"
    }, {
        question : "Who has a appeard on the most covers for EA Sports Fifa.. ", 
        answers : [ "Lionel Messi", "Cristiano Rinaldo", "Wayne Rooney", "Landon Donovan" ],
        correctAnswer : "Wayne Rooney"
    }, {
        question : "In Uncharted's series who was his sidekick and close friend ?", 
        answers : [ "Harry Flynn", "Elena Fisher", "Victor Sullivan", "Charlie Cutter" ],
        correctAnswer : "Victor Sullivan also known as Sully"
    }, {
        question : "When was the first Call of Duty title released?", 
        answers : [ "December 1, 2003", "November 14 2003", "October 29, 2003", "July 18, 2004" ],
        correctAnswer : "October 29, 2003. Most games are relased late November through Early December"
    }, {
        question : "Most played game in the worldwide is ..", 
        answers : [ "Fortnite", "Minecraft", "World of Warcraft", "League of Legends" ],
        correctAnswer : "Correct ! League of Legends is played worldwide with gamers have logged in over 1.3 billion hours of game play or 148401 years !! Yowza"
    }, {
        question : "Most played gaming console in the world", 
        answers : [ "Android Apps", "Playstation 4", "PC", "Nintendo Switch" ],
        correctAnswer : "Correct! PC is the most played console, obvious right ? "
    }, {
        question : "Highest grossed revenue made by what game ?", 
        answers : [ "PlayerUnknown's Battlegrounds", "FIFA 18", "Grand Theft Auto V", "Call of Duty: Black Ops IIII" ],
        correctAnswer : "Correct! PlayerUnknown's Battlegrounds, Bluehole  at a WHOPPING $1.028 billion"
    }, {
        question : "The Division 2 sequal to Tom Clancy's The Division can be finished in how many hours? ", 
        answers : [ "35 hours", "65 hours", "40 hours", "80 hours" ],
        correctAnswer : "Correct! 40 hours is Approximate and usually will take more if you can resist the awesome side missions"
    }];

    $("#startButton").on("click", run);

      function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 25000);
    }

    function decrement() {
        number--;
    $("#show-number").html("<h1>" + number + "</h1>");
    
    if (number === 0) {
        stop();
        alert("Time Up!");
      }
    }
    function stop() {
      clearInterval(intervalId);
    }

    run();



document.body.style.backgroundImage = "url('https://r3.whistleout.com/public/images/articles/2017/05/Missouri.png')";