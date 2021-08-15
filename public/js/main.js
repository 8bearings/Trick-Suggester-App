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
    new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know" ], "George Washington"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi","42", "Wah?", "I don't know"], "42"),
    new Question("Do you love to code?", ["No","Yes", "Hell Yeah", "No"], "Hell Yeah"),
    new Question("What's the best programming language?", ["Javascript","C#", "Php", "Python"], "Javascript"),
    new Question("Is Jason Chan Awesome?", ["Yes","No", "Maybe", "He's okay"], "Yes")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
}

