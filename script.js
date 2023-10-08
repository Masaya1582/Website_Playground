const questions = [
    {
        question: "What is the capital of France?",
        correctAnswer: "paris"
    },
    {
        question: "What is the capital of Spain?",
        correctAnswer: "madrid"
    }
];

const quizContainer = document.querySelector(".quiz-container");
const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", () => {
    const userAnswers = [];
    let score = 0;

    questions.forEach((question, index) => {
        const options = document.querySelectorAll(`input[name="q${index + 1}"]`);
        options.forEach((option) => {
            if (option.checked) {
                userAnswers.push(option.value);
                if (option.value === question.correctAnswer) {
                    score++;
                }
            }
        });
    });

    const result = document.createElement("p");
    result.textContent = `You scored ${score} out of ${questions.length} correct.`;

    quizContainer.appendChild(result);
    submitButton.disabled = true;
});
