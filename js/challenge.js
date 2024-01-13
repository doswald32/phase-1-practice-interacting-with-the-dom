let timer = document.getElementById('counter');
let count = 0;
let intervalID;

//Increment counter by 1 every second
document.addEventListener("DOMContentLoaded", function() {
    intervalID = setInterval(startCount, 1000);
});

function startCount() {
    count += 1;
    timer.textContent = count;
};

//Decrement counter by 1 each time the minus button is clicked
let minus = document.getElementById('minus');
minus.addEventListener('click', function() {
    count--;
});

//Increment counter by 1 each time the minus button is clicked
let plus = document.getElementById('plus');
plus.addEventListener('click', function() {
    console.log("plus 1");
    count++;
});

//Add comment each time the heart button is clicked
let heart = document.getElementById('heart');
heart.addEventListener('click', function () {
    const newDiv = document.createElement('div');
    newDiv.textContent = `${timer.textContent} was clicked!`;
    const commentsList = document.getElementById('list');
    commentsList.appendChild(newDiv);
});

//Pause counter when pause button is clicked
let btnPause = document.getElementById('pause');
btnPause.addEventListener('click', function () {
    clearInterval(intervalID);
    btnPause.textContent = "resume";
    btnPause.id = "resume";
});

let btnResume = document.getElementById('resume');
btnResume.addEventListener('click', startCount());