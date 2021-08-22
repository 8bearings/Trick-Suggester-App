/* dropped in */

// document.querySelectorAll(window).on('resize', function() {

// 	var width = document.querySelector(window).width()
//   var vert_pad = ['300px', '150px', '50px']
//   var font_size_section = ['25px', '23px', '21px']
//   var padding_socials = ['30px', '25px', '20px']
//   var img_width_socials = ['30px', '28px', '26px']
//   var i = 0

// 	if (width <= 840) {
//   	i = 2
//   } else if (width <= 1280) {
//   	i = 1
//   } else {
//   	i = 0
//   }
  
//   document.querySelector('.header').css('padding-left', vert_pad[i])
//   document.querySelector('.header').css('padding-right', vert_pad[i])
  
//   document.querySelector('.jumbo').css('padding-left', vert_pad[i])
//   document.querySelector('.jumbo').css('padding-right', vert_pad[i])
  
//   document.querySelector('.section').css('padding-left', vert_pad[i])
//   document.querySelector('.section').css('padding-right', vert_pad[i])
//   document.querySelector('.section').css('font-size', font_size_section[i])
  
//   document.querySelector('.image').css('padding-left', vert_pad[i])
//   document.querySelector('.image').css('padding-right', vert_pad[i])
  
//   document.querySelector('.socials').css('padding-left', vert_pad[i])
//   document.querySelector('.socials').css('padding-right', vert_pad[i])
//   document.querySelector('.socials a').css('padding-left', padding_socials[i])
//   document.querySelector('.socials a').css('padding-right', padding_socials[i])
//   document.querySelector('.socials a img').css('width', img_width_socials[i])
  
//   document.querySelector('.footer').css('padding-left', vert_pad[i])
//   document.querySelector('.footer').css('padding-right', vert_pad[i])

// })

// Feed Page

// Quiz

window.onload = function() {
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
//Create Questions
var questions = [
    new Question("Can you push/ride on a skateboard?", [ "Yes", "No", "A little", "I don't know" ], "Yes"),
    new Question("Can you ollie?", [ "Yes", "No", "sometimes", "I don't know" ], "Yes"),
    new Question("Can you kickflip or heelflip?", [ "Yes", "No", "sometimes", "I don't know" ], "Yes"),
    new Question("Can you flip down stairs or into grinds/slides? ", [ "Yes", "No", "sometimes", "I don't know" ], "Yes"),
    
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
}

// Randomizer

const ezTricks = [
    { 
      name: "Falling",
      logo: "https://www.liveabout.com/thmb/OK3A5zaRcXH1SwnT3-PX0o-IQko=/1002x1002/smart/filters:no_upscale()/GettyImages-970172544-5c70070dc9e77c00016bfd61.jpg"
    },
    { 
      name: "Heat",
      logo: "https://lh5.googleusercontent.com/-CoS1Y_1NwB4/AAAAAAAAAAI/AAAAAAAAAGk/bQ01ywkr4Oc/s120-c/photo.jpg"
    },
    { 
      name: "Celtics",
      logo: "https://lh5.googleusercontent.com/-bqScML7XAxw/AAAAAAAAAAI/AAAAAAAADGw/0yaLLvca5wg/s120-c/photo.jpg"
    },
    { 
      name: "Bulls",
      logo: "https://lh6.googleusercontent.com/-B9EBLSqvYP8/AAAAAAAAAAI/AAAAAAAABLw/MHPidXI2E3Y/s120-c/photo.jpg"
    },
    { 
      name: "Knicks",
      logo: "https://lh6.googleusercontent.com/-pu4R1xvCv4Q/AAAAAAAAAAI/AAAAAAAACJI/cRQmSisWn0E/s120-c/photo.jpg"
    },
    { 
      name: "Spurs",
      logo: "https://lh3.googleusercontent.com/-tT5q9eiW760/AAAAAAAAAAI/AAAAAAAAAs0/wftQ023nqW8/s120-c/photo.jpg"
    },
    { 
      name: "Rockets",
      logo: "https://lh6.googleusercontent.com/-hJOEUhNJ2y0/AAAAAAAAAAI/AAAAAAAAAUA/bwml1wozrxs/s120-c/photo.jpg"
    },
    { 
      name: "Nets",
      logo: "https://lh4.googleusercontent.com/-07g9Tzca1Qg/AAAAAAAAAAI/AAAAAAAAIBs/4BiO3jwIT6k/s120-c/photo.jpg"
    },
    { 
      name: "Warriors",
      logo: "https://lh4.googleusercontent.com/-kdzsktQIjDk/AAAAAAAAAAI/AAAAAAAAEMc/GlRyDnEmd7I/s120-c/photo.jpg"
    },
    { 
      name: "Mavericks",
      logo: "https://lh6.googleusercontent.com/-slpV9wVGlpc/AAAAAAAAAAI/AAAAAAAAKjQ/w22hy18WF8w/s120-c/photo.jpg"
    },
    { 
      name: "76ers",
      logo: "https://lh3.googleusercontent.com/-dM5YTCEC8ag/AAAAAAAAAAI/AAAAAAAASbo/F5DHqNaUEn0/s120-c/photo.jpg"
    },
    { 
      name: "Clippers",
      logo: "https://lh4.googleusercontent.com/-7guI_knBXY8/AAAAAAAAAAI/AAAAAAAAFZ4/P57zIax7HP0/s120-c/photo.jpg"
    },
    { 
      name: "Pistons",
      logo: "https://lh6.googleusercontent.com/-SzQcFSVktYo/AAAAAAAAAAI/AAAAAAAABMg/jxWlYgL3tMk/s120-c/photo.jpg"
    },
    { 
      name: "Cavaliers",
      logo: "https://lh5.googleusercontent.com/-PyACUlT4OEI/AAAAAAAAAAI/AAAAAAAAFto/piXY5-37UlQ/s120-c/photo.jpg"
    },
    { 
      name: "Hawks",
      logo: "https://lh4.googleusercontent.com/-wfn0Ob8eZ40/AAAAAAAAAAI/AAAAAAAABjA/Fa1SN8q-Uck/s120-c/photo.jpg"
    },
    { 
      name: "Suns",
      logo: "https://lh4.googleusercontent.com/-1Uirg3UwebE/AAAAAAAAAAI/AAAAAAAAGVM/pJdubV_m354/s120-c/photo.jpg"
    },
    { 
      name: "Nuggets",
      logo: "https://lh4.googleusercontent.com/-afBh75LwX10/AAAAAAAAAAI/AAAAAAAAAs8/IFmOye1Fh1c/s120-c/photo.jpg"
    },
    { 
      name: "Trail Blazers",
      logo: "https://lh6.googleusercontent.com/-6porP9gICeE/AAAAAAAAAAI/AAAAAAAAlc8/51v4HJ2YeCo/s120-c/photo.jpg"
    },
    { 
      name: "Magic",
      logo: "https://lh3.googleusercontent.com/-dkcWwSD4OKw/AAAAAAAAAAI/AAAAAAAAB9E/EluQ8hOa3yY/s120-c/photo.jpg"
    },
    { 
      name: "Bucks",
      logo: "https://lh4.googleusercontent.com/-ldoVAVPteqs/AAAAAAAAAAI/AAAAAAAAB-4/oP_Ygs0IktQ/s120-c/photo.jpg"
    },
    { 
      name: "Raptors",
      logo: "https://lh3.googleusercontent.com/-dbq2QeUHC9w/AAAAAAAAAAI/AAAAAAAABuY/-tT-SSZGvz8/s120-c/photo.jpg"
    },
    { 
      name: "Grizzlies",
      logo: "https://lh6.googleusercontent.com/-3MHhr11w3js/AAAAAAAAAAI/AAAAAAAADF8/bzx_vtY7BFw/s120-c/photo.jpg"
    },
    { 
      name: "Pelicans",
      logo: "https://lh3.googleusercontent.com/-esVbV5BsHKM/AAAAAAAAAAI/AAAAAAAAAxs/BWMZUgs-TI4/s120-c/photo.jpg"
    },
    { 
      name: "Timberwolves",
      logo: "https://lh5.googleusercontent.com/-sAIE7PLnJ48/AAAAAAAAAAI/AAAAAAAABaY/QvNe42jXWKY/s120-c/photo.jpg"
    },
    { 
      name: "Thunder",
      logo: "https://lh4.googleusercontent.com/-7BAmvi8NTNo/AAAAAAAAAAI/AAAAAAAAEtE/QlB773K3Vv8/s120-c/photo.jpg"
    },
    { 
      name: "Jazz",
      logo: "https://lh6.googleusercontent.com/-lnQwsJXzbgM/AAAAAAAAAAI/AAAAAAAAAIc/ThLlxtFfSBQ/s120-c/photo.jpg"
    },
    { 
      name: "Bobcats",
      logo: "https://lh3.googleusercontent.com/-xIfVPsdVqB0/AAAAAAAAAAI/AAAAAAAAAFE/ITumzjq3fVw/s120-c/photo.jpg"
    },
    { 
      name: "Kings",
      logo: "https://lh4.googleusercontent.com/-xQkBZWrsBJ4/AAAAAAAAAAI/AAAAAAAAD0c/qAXvMe-5cQM/s120-c/photo.jpg"
    },
    { 
      name: "Wizards",
      logo: "https://lh6.googleusercontent.com/-zXcbF7QiMkU/AAAAAAAAAAI/AAAAAAAAALs/Nl3fkQWTFE0/s120-c/photo.jpg"
    },
    { 
      name: "Pacers",
      logo: "https://lh5.googleusercontent.com/-9mjX-jDdSoo/AAAAAAAAAAI/AAAAAAAADtE/15_5_ly0WBE/s120-c/photo.jpg"
    },
   ];
  
  var dist = {};
    
  function addDist(i) {
    if (!dist[i]) {
      dist[i] = 0
    }
    dist[i]++;
  var printArray = []
  for (var i = 0; i < ezTricks.length; i++) {
    printArray.push(ezTricks[i].name+": "+(dist[i] || 0));
  }
  console.log(printArray);
  }
    
//   document.querySelector(".home .random").click(function() {
//     var index = Math.floor(Math.random()*ezTricks.length);
//     addDist(index);
//     document.querySelector(".home .name").text(ezTricks[index].name);
//     document.querySelector(".home .logo").html("<img src='"+ezTricks[index].logo+"'/>");
//   });

/*window.onload=function(){
  const random = document.querySelector('.random')

  random.addEventListener('click', event => {
    let index = Math.floor(Math.random()*ezTricks.length);
    addDist(index);
    document.getElementsByClassName('name').textContent += ezTricks[index].name
    document.getElementsByClassName('logo').innerHtml += ("<img src='"+ezTricks[index].logo+"'/>");
    console.log(ezTricks[index].name)
  });
}*/


// BUGGED CLICK EVENT

// redo
window.onload=function(){
    const random = document.querySelector('.random')
  
    random.addEventListener('click', randoFunction);

    function randoFunction(){
      let index = Math.floor(Math.random()*ezTricks.length);
      addDist(index);
      document.querySelector('.name').innerText = ezTricks[index].name
      document.querySelector('.logo').innerHTML = ("<img src='"+ezTricks[index].logo+"'/>");
      console.log(ezTricks[index].name)
    };
  }