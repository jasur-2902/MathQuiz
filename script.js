
// Declaring variables
let quiz_solution;

let number1;
let operator;
let number2;
let result;


// main function  which determines the level of difficulty
function start (){
  if(document.getElementById("easy").checked){
    generate_random("easy")
  }
  else if(document.getElementById("hard").checked) {
    generate_random("hard");
  }
  else {
    generate_random("medium")
  }

}


// geneates random math quiz
function generate_random(difficulty){

  // making user input blank
  document.getElementById("quiz_solution").value = "";

  // checking the level of difficulty, depending on difficulty random number will be generated
    if(difficulty === "easy"){
      //generating a random number in range 0 to 10
      number1 = Math.floor((Math.random() * 10));
      number2 = Math.floor((Math.random() * 10));

      // random operator is going to generatedd
      switch (Math.floor((Math.random() * 2))) {
        case 0:
           operator = "+" // if random number is 0 then operator +
          break;
        case 1:
          operator = "-" // if random number is 1 then operator -
          break;
        default:
            operator = "+"; // default one is +
        }

    }
    else if(difficulty === "medium"){
      number1 = Math.floor((Math.random() * 10));
      number2 = Math.floor((Math.random() * 10));

      switch (Math.floor((Math.random() * 4))) {
        case 0:
           operator = "+"
          break;
        case 1:
          operator = "-"
          break;
        case 2:
          operator = "*"
          break;
        case 3:
          operator = "/"
          break;
        default:
          operator = "+";
      }
    }
    else {

      number1 = Math.floor((Math.random() * 100));
      number2 = Math.floor((Math.random() * 100));

      switch (Math.floor((Math.random() * 4))) {
        case 0:
           operator = "+"
          break;
        case 1:
          operator = "-"
          break;
        case 2:
          operator = "*"
          break;
        case 3:
          operator = "/"
          break;
        default:
          operator = "+";
      }

    }

    document.getElementById('quiz_question').innerHTML = number1 + operator + number2; // displaying randomly generated quiz


}


// function whcih gets user input
function getInput() {

  // gets user input and saves it in quiz_solution
  quiz_solution =  document.getElementById("quiz_solution").value;

  return quiz_solution;

}

// function which will check the result
function checkAnswer(){

  // getting user input
  getInput();

  //switch statement to findout what operator was used
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "/":
      result = number1 / number2;
      break;

    case "*":
      result = number1 * number2;
      break;
    default:

  }

 // Printing user feedback
  if (result == quiz_solution) {
    document.getElementById('quiz_result').innerHTML = 'You got it right! ';
  }
  else {
    document.getElementById('quiz_result').innerHTML = 'Wrong! The right answer is - ' + result;
  }


}
