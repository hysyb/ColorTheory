
let generateBtn = document.getElementById('generate');
let complimentaryRadio = document.getElementById('complimentary');
let adjacentTriRadio = document.getElementById('adjacent-tri');
let triadRadio = document.getElementById('triad');
let tetradRadio = document.getElementById('tetrad');

let main = document.getElementById('main');

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');


generateBtn.addEventListener('click',generateColor);

function generateColor(){
    let randHue = Math.random()*360
    color1.style.backgroundColor = 'hsl(' + randHue + ',100%,50%)';
    color2.style.backgroundColor = 'hsl(' + ((randHue + 180)%360) + ',100%,50%)';
}
generateColor();
