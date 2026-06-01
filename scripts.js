let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

// Generates randomized problems
function generateProblem() {
    // Randomizes numbers 0-10
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    
    // Randomizes operator
    const randomOperatorIndex = Math.floor(Math.random() * 3);
    operator = operators[randomOperatorIndex];
    
    if (operator == "+") {
        correctAnswer = num1 + num2;
    } else if (operator == "-") {
        correctAnswer = num1 - num2;
    } else if (operator == "*") {
        correctAnswer = num1 * num2;
    }

    // Prints the generated problem
    document.getElementById("question").innerText = num1 + " " + operator + " " + num2;
    
    // Clears the inputs
    document.getElementById("answer").value = "";
    document.getElementById("message").innerText = "";
}

// Checks if answers are corret
function checkAnswer() {
    const answer = Number(document.getElementById("answer").value);
    const messageElement = document.getElementById("message");
    const oldAnswer = correctAnswer;

    generateProblem();

    // Displays score and messages
    if (answer == oldAnswer) {
        score++;
        document.getElementById("score").innerText = score;
        messageElement.innerText = "Correct!";
        messageElement.style.color = "green";
    } else {
        messageElement.innerText = "Wrong! Correct answer was " + oldAnswer;
        messageElement.style.color = "red";
    }
    
    answer.value = "";
    
    // Check if user has 5 pts
    if (score == 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }
}

// Allows user to play again
function playAgain() {
    // Resets score
    score = 0;
    document.getElementById("score").innerText = score;
    
    // Clears message
    document.getElementById("message").innerText = "";
    
    // Resets display
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    
    // Generates question
    generateQuestion();
}

// Reloads the page so it has a generated problem
window.onload = generateProblem;