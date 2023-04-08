// assignments for markOne and markTwo
//We just made a quiz app that tests whether your friends know you. Use the same skills to create a quiz app about something famous and generic that anyone can play. Keep the features the same and it would be good enough for levelOne qualifier.

// If you want to do something extra, introduce levels: answer 5 right you go to level 2, then 10 right you go to level 3. Use your imagination and make something that your circle would love.

//share this with your friends
//To share use ?embed=1&output=1 at the end of the URL of your app as shown in the video.
// var readlineSync = require("readline-sync");

var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter Your Name To Do The Game : ");

console.log("Welcome " + userName + "\n Play The Java Quiz Game and check your Knowledge in Java Programming Language ? ");
console.log("Total 10 questions are in QUIZ\n 1 Mark For Each Question, No Negative Marking");

var score = 0;

function playJavaGame(question, answer, options) {

  var userAnswer = readlineSync.keyInSelect(options, question);

  console.log('answer', answer, 'userAnswer', userAnswer);

  /* Updated a line */
  if (options[userAnswer] === answer) {
    console.log("Correct Answer! ");
    score++;
  }
  else {
    console.log("InCorrect Answer! ");
  }

  console.log("Current score : ", score);
  console.log("----------------------")
}


const question1 = {

  question: "1.who is the father of java ? ",
  answer: "James Gosling"
};
const question2 = {
  question: "2.Number of primitive data types in Java are? ",
  answer: "8"
};
const question3 = {
  question: "3.What is the size of float and double in java? ",
  answer: "32 and 64"
};
const question4 = {
  question: "4.Automatic type conversion is possible in which of the possible cases? ",
  answer: "int to long"
};
const question5 = {
  question: "5.When an array is passed to a method, what does the method receive? ",
  answer: "The Reference of the array"
};
const question6 = {
  question: "6.what is the valid statement to declare and initialize an array.",
  answer: "int[] A = {1,2,3}"
};
const question7 = {
  question: "Arrays in java are ",
  answer: "objects"
};
const question8 = {
  question: "When is the object created with new keyword? ",
  answer: "At Run Time"
};
const question9 = {
  question: "which is toString() method defined? ",
  answer: "java.lang.Object;"
};
const question10 = {
  question: "Output of Math.floor(3.6)? ",
  answer: "3.0"
};

var questions = [question1, question2, question3, question4, question5, question6, question7, question8,
  question9, question10];

const option1 = ["James Gosling", "Devid", "Peter", "Lobin"];
const option2 = ["8", "5", "10", "4"];
const option3 = ["36 and 64", "32 and 64", "32 and 65", "32 and 120"];
const option4 = ["int to long", "long", "float to int", "long to int"];
const option5 = ["The Reference of the array", "argument", "parameter", "none of these"];
const option6 = ["int arr;", "int[][] arr = [1,2,3]", "int[] arr = (1,2,3)", "int[] A = {1,2,3}"];
const option7 = ["methods", "class", "objects", "function"];
const option8 = ["At Compile Time", "At Run Time", "Interpreter", "None Of These"];
const option9 = ["java.lang.Object;", "java.lang.*;", "java.util.Object;", "java.util.*;"];
const option10 = ["3.3", "3.0", "4.0", "4"];

var options = [option1, option2, option3, option4, option5, option6, option7, option8,
  option9, option10];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  var currentOption = options[i];
  playJavaGame(currentQuestion.question, currentQuestion.answer, currentOption);
}


console.log("Yaa! , You SCORED : ", score);