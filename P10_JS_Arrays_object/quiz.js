function submit(){
    const quiz_div = document.getElementById('quiz-container');
    let correctAnswers = document.querySelectorAll('.choice-correct');
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