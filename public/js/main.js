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

// window.onload = function() {
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;


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
        var gameOverHTML = "<h1>Match Your Skill Level!</h1>";
        gameOverHTML += "<h2> Your skill level is: " + quiz.score + "</h2>";
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
    new Question("Can you push/ride on a skateboard?", [ "Yes", "No", "Somewhat", "I don't know" ], "Yes"),
    new Question("Can you ollie?", [ "Yes", "No", "Sometimes", "I don't know" ], "Yes"),
    new Question("Can you kickflip or heelflip?", [ "Yes", "No", "Sometimes", "I don't know" ], "Yes"),
    new Question("Can you skate down stairs, hand rails, or comfortable on steep vert? (if one applies *click yes*", [ "Yes", "No", "Sometimes", "I don't know" ], "Yes"),
    
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
}


// Explore
window.onload = function(){
const explore = document.getElementById('explore')

explore.addEventListener('click', function fun2(){
    window.open('/signup')

});
}
// var addFunctionOnWindowLoad = function(callback){
//     if(window.addEventListener){
//         window.addEventListener('load',callback,false);
//     }else{
//         window.attachEvent('onload',callback);
//     }
// }

// addFunctionOnWindowLoad(Quiz);
// addFunctionOnWindowLoad(fun2);
// Randomizer EZ

// const ezTricks = [
//     { 
//       name: "Falling",
//       logo: "https://www.liveabout.com/thmb/OK3A5zaRcXH1SwnT3-PX0o-IQko=/1002x1002/smart/filters:no_upscale()/GettyImages-970172544-5c70070dc9e77c00016bfd61.jpg"
//     },
//     { 
//       name: "Step On",
//       logo: "https://i.ytimg.com/vi/iku4YmdRUuE/maxresdefault.jpg"
//     },
//     { 
//       name: "Pushing",
//       logo: "https://i.pinimg.com/originals/32/15/90/32159076377b8e796eb48b79dc4e620b.jpg"
//     },
//     { 
//       name: "Rolling",
//       logo: "https://cdn.vox-cdn.com/thumbor/D_0bBpvAhy7ViWgWa4NTTX91GMY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18306834/DSCF2213.jpg"
//     },
//     { 
//       name: "Stopping",
//       logo: "https://www.liveabout.com/thmb/Vqssjb9bxz0jnXISAePJZXoyEdo=/2121x1416/filters:no_upscale():max_bytes(150000):strip_icc()/485935107-56a878513df78cf7729e325f.jpg"
//     },
//     { 
//       name: "Turning",
//       logo: "https://www.thelongboardstore.com/product_images/uploaded_images/weelbite-article-wheelbite.jpg"
//     },
//     { 
//       name: "Kickturn",
//       logo: "https://images.squarespace-cdn.com/content/v1/57d2e53244024362fbb647c6/1522342259025-M4OHWR30U7ORE6HMGSXP/Deep+end+kick+turn"
//     },
//    ];
  
//   var dist = {};
    
//   function addDist(i) {
//     if (!dist[i]) {
//       dist[i] = 0
//     }
//     dist[i]++;
//   var printArray = []
//   for (var i = 0; i < ezTricks.length; i++) {
//     printArray.push(ezTricks[i].name+": "+(dist[i] || 0));
//   }
//   console.log(printArray);
//   }

// window.onload=function(){
//     const random = document.querySelector('.random')
  
//     random.addEventListener('click', randoFunction);

//     function randoFunction(){
//       let index = Math.floor(Math.random()*ezTricks.length);
//       addDist(index);
//       document.querySelector('.name').innerText = ezTricks[index].name
//       document.querySelector('.logo').innerHTML = ("<img src='"+ezTricks[index].logo+"'/>");
//       console.log(ezTricks[index].name)
//     };
//   }

 