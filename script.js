// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const categorySelect = document.getElementById('category');
const numberQuestionsSelect = document.getElementById('number-questions');
const startBtn = document.getElementById('start-btn');

const questionCount = document.getElementById('question-count');
const scoreDisplay = document.getElementById('score-display');
const progress = document.querySelector('.progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

const finalScore = document.getElementById('final-score');
const timeTaken = document.getElementById('time-taken');
const playAgainBtn = document.getElementById('play-again-btn');
const homeBtn = document.getElementById('home-btn');

// Quiz data
const quizData = {
    general: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            answer: "Tokyo"
        },
        {
            question: "Which is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
            answer: "Mount Everest"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            answer: "Au"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            answer: "William Shakespeare"
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["Tiger", "Elephant", "Lion", "Panther"],
            answer: "Lion"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Liver", "Skin"],
            answer: "Skin"
        },
        {
            question: "How many continents are there on Earth?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["WA", "H2O", "HO2", "W"],
            answer: "H2O"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Diamond", "Titanium", "Platinum", "Steel"],
            answer: "Diamond"
        },
        {
            question: "Which of these is NOT a state of matter?",
            options: ["Solid", "Liquid", "Gas", "Molecule"],
            answer: "Molecule"
        },
        {
            question: "What is the closest star to Earth?",
            options: ["Proxima Centauri", "The Sun", "Alpha Centauri", "Polaris"],
            answer: "The Sun"
        },
        {
            question: "What is the study of fossils called?",
            options: ["Archaeology", "Paleontology", "Geology", "Biology"],
            answer: "Paleontology"
        },
        {
            question: "What is the main gas found in the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen"
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "199,792 km/s", "299,792 km/s"],
            answer: "299,792 km/s"
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            answer: "1945"
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            answer: "George Washington"
        },
        {
            question: "The ancient city of Rome was built on how many hills?",
            options: ["Five", "Six", "Seven", "Eight"],
            answer: "Seven"
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Ottoman Empire", "Mongolian Empire", "Roman Empire", "Persian Empire"],
            answer: "Mongolian Empire"
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1912", "1915", "1918"],
            answer: "1912"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
            answer: "Alexander Fleming"
        },
        {
            question: "Which civilization built the Machu Picchu complex in Peru?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            answer: "Inca"
        }
    ],
    geography: [
        {
            question: "What is the largest country by land area?",
            options: ["Canada", "China", "United States", "Russia"],
            answer: "Russia"
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Antarctic Desert"],
            answer: "Antarctic Desert"
        },
        {
            question: "Which of these countries is NOT in Africa?",
            options: ["Nigeria", "Egypt", "Bangladesh", "Kenya"],
            answer: "Bangladesh"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: "Canberra"
        },
        {
            question: "Which mountain range separates Europe and Asia?",
            options: ["Alps", "Himalayas", "Andes", "Urals"],
            answer: "Urals"
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "Liechtenstein"],
            answer: "Vatican City"
        }
    ],
    entertainment: [
        {
            question: "Who played the character of Harry Potter in the movie series?",
            options: ["Rupert Grint", "Daniel Radcliffe", "Emma Watson", "Tom Felton"],
            answer: "Daniel Radcliffe"
        },
        {
            question: "Which band performed the song 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Led Zeppelin", "Queen", "Rolling Stones"],
            answer: "Queen"
        },
        {
            question: "In which year was the first episode of The Simpsons aired?",
            options: ["1987", "1989", "1991", "1993"],
            answer: "1989"
        },
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
            answer: "Michael Jackson"
        },
        {
            question: "Which movie won the Oscar for Best Picture in 2020?",
            options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
            answer: "Parasite"
        },
        {
            question: "What was the first feature-length animated movie ever released?",
            options: ["Pinocchio", "Snow White and the Seven Dwarfs", "Dumbo", "Bambi"],
            answer: "Snow White and the Seven Dwarfs"
        },
        {
            question: "Who wrote the 'Harry Potter' book series?",
            options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
            answer: "J.K. Rowling"
        },
        {
            question: "What is the name of the main character in the TV series 'Breaking Bad'?",
            options: ["Jesse Pinkman", "Walter White", "Saul Goodman", "Hank Schrader"],
            answer: "Walter White"
        }
    ]
};

// Game Variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let quizStartTime;
let selectedCategory;
let numberOfQuestions;
let selectedOption = null;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);
playAgainBtn.addEventListener('click', () => {
    resultScreen.classList.add('hide');
    startScreen.classList.remove('hide');
});
homeBtn.addEventListener('click', () => {
    resultScreen.classList.add('hide');
    startScreen.classList.remove('hide');
});

// Functions
function startQuiz() {
    selectedCategory = categorySelect.value;
    numberOfQuestions = numberQuestionsSelect.value;
    
    // Get questions from selected category
    let allCategoryQuestions = [...quizData[selectedCategory]];
    
    // Shuffle questions
    allCategoryQuestions = shuffleArray(allCategoryQuestions);
    
    // Select required number of questions
    if (numberOfQuestions === 'all') {
        currentQuestions = allCategoryQuestions;
    } else {
        currentQuestions = allCategoryQuestions.slice(0, parseInt(numberOfQuestions));
    }
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    quizStartTime = new Date();
    
    // Update UI
    updateQuestionCount();
    updateScore();
    
    // Hide start screen, show quiz screen
    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    // Clear previous options
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hide');
    selectedOption = null;
    
    // Get current question
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Set question text
    questionText.textContent = currentQuestion.question;
    
    // Create option elements
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.setAttribute('data-index', index);
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
    
    // Update progress bar
    const progressPercentage = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}

function selectOption(e) {
    // If an option is already selected, do nothing
    if (selectedOption !== null) return;
    
    selectedOption = e.target;
    
    // Mark selected option
    selectedOption.classList.add('selected');
    
    // Get current question
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Check if answer is correct
    if (selectedOption.textContent === currentQuestion.answer) {
        selectedOption.classList.add('correct');
        score++;
        updateScore();
    } else {
        selectedOption.classList.add('wrong');
        
        // Highlight correct answer
        Array.from(optionsContainer.children).forEach(option => {
            if (option.textContent === currentQuestion.answer) {
                option.classList.add('correct');
            }
        });
    }
    
    // Disable all options
    Array.from(optionsContainer.children).forEach(option => {
        option.removeEventListener('click', selectOption);
        option.style.cursor = 'default';
    });
    
    // Show next button
    nextBtn.classList.remove('hide');
}

function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        updateQuestionCount();
        loadQuestion();
    } else {
        endQuiz();
    }
}

function updateQuestionCount() {
    questionCount.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function endQuiz() {
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - quizStartTime) / 1000); // in seconds
    
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    finalScore.textContent = `${score}/${currentQuestions.length}`;
    timeTaken.textContent = `${minutes} min ${seconds} sec`;
}

// Helper Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}