let generateBtn = document.getElementById('generate');
let main = document.getElementById('main');

generateBtn.addEventListener('click',generateColor);

function generateColor(){
    main.style.backgroundColor = 'hsl(' + (Math.random() * 360) + ',100%,50%)';
}