var myQuestions = [{
        question: "আপনার কাশি আছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    },

    {
        question: "ঠান্ডা লেগেছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    },

    {
        question: "ডায়রিয়া হচ্ছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    },

    {
        question: "গলায় ক্ষত বা ঘা হয়েছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    },

    {
        question: "পেশি বা শরীরে ব্যাথা আছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    }, {
        question: "মাথা ব্যাথা আছে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    },

    {
        question: "আপনার জ্বর ১০০ ডিগ্রী ফারেনহাইট বা তার উপরে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ'
    }, {
        question: "শ্বাস নিতে কষ্ট হয় কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ',
        weight: '2'
    }, {
        question: "আপনার অবসাদ/ক্লান্তি লাগে কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ',
        weight: '2'
    }, {
        question: "গত ১৪ দিনে কোথাও ভ্রমন করেছেন কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ',
        weight: '3'
    }, {
        question: "করোনা আক্রান্ত এলাকায় ভ্রমন করেছেন কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ',
        weight: '3'
    }, {
        question: " করোনা আক্রান্ত কোন ব্যাক্তির সংস্পর্শে গিয়েছেন কিনা?",
        answers: {
            হ্যাঁ: '',
            না: '',
        },
        correctAnswer: 'হ্যাঁ',
        weight: '3'
    },
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
        // for each question...
        for (var i = 0; i < questions.length; i++) {
            // first reset the list of answers
            answers = [];
            // for each available answer...
            for (letter in questions[i].answers) {
                // ...add an html radio button
                answers.push('<label style="margin-right: 40px;">' + '<input type="radio" name="question' + i + '" value="' + letter + '">' + letter + ': ' + questions[i].answers[letter] + '</label>');
            }
            // add this question and its answers to the output
            output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
        }
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        var dangerLevel = false;
        // for each question...
        for (var i = 0; i < questions.length; i++) {
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                if (questions[i].weight == '2') {
                    //add to the number of correct answers
                    numCorrect = numCorrect + 2;
                } else if (questions[i].weight == '3') {
                    //add to the number of correct answers

                    numCorrect = numCorrect + 3;
                    dangerLevel = true;
                } else {
                    numCorrect++;
                }
            }
        }
        if (numCorrect > 10) {
            resultsContainer.innerHTML = 'অতিসত্তর মোবাইলে আপনার নিকটবর্তী হাসপাতাল বা ৩৩৩, ১৬২৬৩, ১০৬৫৫ অথবা আইইডিসিআর এর হটলাইন নাম্বারে যোগাযোগ করবেন দেরি না করে শ্বাসকষ্টের চিকিৎসার জন্যে হাসপাতালে যান। হাসপাতালে যাওয়ার সময় অবস্যই মাস্ক পরিধান করবেন এবং গণপরিবহন বা ভীড় এড়িয়ে চলবেন।যাতাযাতের সময় আপনার সাথে শুধু একজন সঙ্গী থাকতে পারবে তবে তাঁর সাথে নিরাপদ দূরত্ব ( ৩ ফুট ) বজায় রাখতে হবে। ';
        } else if (dangerLevel == true) {
            resultsContainer.innerHTML = 'অতিসত্তর মোবাইলে আপনার নিকটবর্তী হাসপাতাল বা ৩৩৩, ১৬২৬৩, ১০৬৫৫ অথবা আইইডিসিআর এর হটলাইন নাম্বারে যোগাযোগ করবেন দেরি না করে শ্বাসকষ্টের চিকিৎসার জন্যে হাসপাতালে যান। হাসপাতালে যাওয়ার সময় অবস্যই মাস্ক পরিধান করবেন এবং গণপরিবহন বা ভীড় এড়িয়ে চলবেন।যাতাযাতের সময় আপনার সাথে শুধু একজন সঙ্গী থাকতে পারবে তবে তাঁর সাথে নিরাপদ দূরত্ব ( ৩ ফুট ) বজায় রাখতে হবে। ';
        } else {
            resultsContainer.innerHTML = ' এইমুহূর্তে আপনার করোনা ভাইরাসের ঝুঁকি খুব কম';
        }
        console.log(numCorrect)
    }
    // show questions right away
    showQuestions(questions, quizContainer);
    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}