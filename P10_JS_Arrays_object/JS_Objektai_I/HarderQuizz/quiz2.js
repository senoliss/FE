const quizContainer = document.getElementById('quiz-container');
const questionsContainer = quizContainer.getElementsByClassName('questions')[0];
let questCounter = 0;   // counter for question name like q1, q2, ... .
let counteriux = 0;     // counter for specific question input id like q1a, q1b, ... , q2a, q2b, ... .



const questions = [
    {
        question: "What is the capital of France?",
        choices: [
            { choice: "Paris", isCorrect: true },
            { choice: "London", isCorrect: false },
            { choice: "Vilnius", isCorrect: false },
            { choice: "Rome", isCorrect: false },
        ],
    },
    {
        question: "Kiek dienų turi vasario mėnuo nekeliamieji metai?",
        choices: [
            { choice: "28", isCorrect: true },
            { choice: "29", isCorrect: false },
            { choice: "30", isCorrect: false },
            { choice: "31", isCorrect: false },
        ],

    },
    // create more questions here
];



function loadQuestions(){
    //add logic to shift questions from array 
    //add logic to shift answers  
    //add logic to load questions to DOM

    // trying to load questions on page load
    questions.forEach(question =>{
        questCounter++;
        const questionHeader = document.createElement('h3');
        questionHeader.innerHTML = `Question: ${question.question}`;

        const questionContainer = document.createElement('div');
        questionContainer.class = 'question';
        questionContainer.id = `question${questCounter}`;
        
        questionsContainer.append(questionContainer);
        questionContainer.append(questionHeader);
    
        question.choices.forEach( choice => {
            const letter = String.fromCharCode('a'.charCodeAt(0) + counteriux);
    
            const questionChoice = document.createElement('input');
            const breaker = document.createElement('br');
    
            questionChoice.type = 'radio';
            questionChoice.name=`q${questCounter}`;
            questionChoice.value=`${choice.choice}`;
            questionChoice.id=`q${questCounter}${letter}`;
    
            // questionChoice.textContent = `${choice.choice}`;
    
            questionContainer.append(questionChoice);
            questionContainer.append(`${choice.choice}`);
            questionContainer.append(breaker);
        
            counteriux++;
        })
        counteriux = 0;
    })
}

document.addEventListener("DOMContentLoaded", loadQuestions());

submit = () => {
    //add logic to check answers
    //add logic to show result

    let results = 0;
    console.log(results);
    // const q1Correct = document.querySelector('')
    const questions = document.querySelectorAll('.question');

  
    // get the questions
    questions.forEach((question, index) => {
        const choices = question.querySelectorAll('.choice');
        console.log(question)
        // get the choices
        choices.forEach(choice => {
                // check if choice is checked
                if (choice.checked) {
                    // check if chosen choice is correct
                    if (choice.classList.contains('choice-correct')) { //choice === correct is bad because it checks all and only last correct answer is painted as green
                        // color the checked radio button question green
                        question.style.backgroundColor = '#8BC34A';
                        results +=1;
                    }
                    // if not correct
                    else {
                        // color the checked radio button question red
                        question.style.backgroundColor = '#FF5733'; // Red color
                    }
                }
            })
        })
    
    // })


    const resultsContainer = document.getElementById('result');
    resultsContainer.innerHTML = `<p>Your result: <b>${results}</b></p>`;
    console.log(`Result: ${results}`);

}