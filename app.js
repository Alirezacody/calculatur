'use strict';

const displayEl = document.querySelector('.display');


function appendToDisplay(input){
    displayEl.value += input;
}

function clearDisplay(){
    displayEl.value ='';
}

function equal(){
    try{
        displayEl.value = eval(displayEl.value)
    }
    catch(error){
        displayEl.value = 'Error🚫!'
    }
}

function calculat(){    
    equal();
}

document.addEventListener('keydown' , function(e){
    console.log(e);
    if(e.key === 'Enter'){
       equal();
    }
})

const colors = ['#9400D3', '#0000FF', '#FFFF00', '#FF1493']; //color//
const numberOfBalls = 25;
let balls = [];

function createBalls() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < numberOfBalls; i++) {
        const ball = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 20 + 20; //size 20 to 40//
        ball.className = 'ball';
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;
        ball.style.backgroundColor = color;
        ball.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        ball.style.top = `${Math.random() * window.innerHeight}px`;
        ball.style.left = `${Math.random() * (window.innerWidth * 0.9)}px`;
        ball.style.animationDuration = `${Math.random() * 3 + 2}s`;

        fragment.appendChild(ball);
        balls.push(ball);
    }
    document.body.appendChild(fragment);
}

function updateBallPositions() {
    balls.forEach(ball => {
        ball.style.top = `${Math.random() * window.innerHeight}px`;
        ball.style.left = `${Math.random() * (window.innerWidth * 0.9)}px`;
    });
}

window.addEventListener('resize', updateBallPositions);
createBalls();