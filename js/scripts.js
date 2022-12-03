/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 


// **** QUESTION GENERATION **** //
const generateQuestion = () => {
    if (questions.length == 0)
        return "";

    const randomIdx = Math.floor(Math.random() * questions.length);
    return questions[randomIdx];
}

const displayQuestions = () => {
    document.querySelector('.question').innerHTML = generateQuestion();
}

