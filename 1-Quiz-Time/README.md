# Quiz Time

A simple, interactive quiz application built with vanilla HTML, CSS, and JavaScript.

## Features

- Multiple-choice quiz questions
- Instant feedback on answer selection
- Score tracking throughout the quiz
- Final results screen
- Clean, responsive design

## Demo

![Quiz Time Screenshot](Capture%20d'écran%202019-01-01%20181341.png)

## Getting Started

### Prerequisites

No installation or dependencies required — just a web browser.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/quiz-time.git
   ```
2. Navigate to the project folder
   ```bash
   cd quiz-time
   ```
3. Open `index.html` in your browser
   ```bash
   open index.html
   ```
   (or simply double-click the file)

## Project Structure

```
quiz-time/
├── index.html      # Main HTML structure
├── style.css       # Styling
├── script.js       # Quiz logic and questions
└── README.md
```

## How It Works

- Quiz questions and answers are hardcoded as a JavaScript array of objects in `script.js`.
- Each question object includes the question text, answer options, and the correct answer.
- JavaScript handles rendering questions, checking answers, updating the score, and displaying the final result.

## Customization

To add or edit questions, open `script.js` and update the questions array, for example:

```javascript
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  ]
```

## Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

## Future Improvements

- Add a timer per question
- Add difficulty levels
- Fetch questions from an external API
- Save high scores using local storage

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Sajed Toumi — feel free to reach out or connect!
