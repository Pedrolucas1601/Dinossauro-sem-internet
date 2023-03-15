const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handletKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            isJumping();
        }
    }
}

