
let generateBtn = document.getElementById('generate');
let complimentaryRadio = document.getElementById('complimentary');
let adjacentTriRadio = document.getElementById('adjacent-tri');
let triadRadio = document.getElementById('triad-color');
let tetradRadio = document.getElementById('tetrad-color');

let main = document.getElementById('main');

let color1 = document.getElementById('color1');
let color1out = document.getElementById('color1output');
let color2 = document.getElementById('color2');
let color2out = document.getElementById('color2output');
let color3 = document.getElementById('color3');
let color3out = document.getElementById('color3output');
let color4 = document.getElementById('color4');
let color4out = document.getElementById('color4output');
let colorPanes = [color1, color2, color3, color4];

generateBtn.addEventListener('click',handleGenerateBtn);

let saturation = '100%';
let lightness = '50%';

function handleGenerateBtn() {
    saturation = (Math.random()*60+40) + '%';
    lightness = (Math.random()*60+40) + '%';
    if (complimentaryRadio.checked) {
        generateComplimentaryColor();
    }
    if (adjacentTriRadio.checked){
        generateAdjacentTricolor();
    }
    if (triadRadio.checked) {
        generateTriadColor();
    }
    if (tetradRadio.checked) {
        generateTetradColor();
    }
}

function generateComplimentaryColor(){
    let randHue = Math.random()*360
    color3.classList.add('displayNone');
    color4.classList.add('displayNone');
    main.style.gridTemplateColumns = '1fr 1fr';
    color1.style.backgroundColor = 'hsl(' + randHue + ','+saturation+','+lightness+')';
    color1out.textContent = color1.style.backgroundColor;
    color2.style.backgroundColor = 'hsl(' + ((randHue + 180)%360) + ','+saturation+','+lightness+')';
    color2out.textContent = color2.style.backgroundColor;
}
function generateAdjacentTricolor(){
    //phi value of 30*
    let phi = 30;

    let randHue = Math.random()*360;
    color3.classList.remove('displayNone');
    color4.classList.add('displayNone');
    main.style.gridTemplateColumns = '1fr 1fr 1fr';
    color1.style.backgroundColor = 'hsl(' + randHue + ','+saturation+','+lightness+')';
    color1out.textContent = color1.style.backgroundColor;
    color2.style.backgroundColor = 'hsl(' + ((randHue+phi)%360) + ','+saturation+','+lightness+'';
    color2out.textContent = color2.style.backgroundColor;
    color3.style.backgroundColor = 'hsl(' + ((randHue-phi)%360) + ','+saturation+','+lightness+')';
    color3out.textContent = color3.style.backgroundColor;

}
function generateTriadColor(){
    let phi = 30;

    let randHue = Math.random()*360;
    color3.classList.remove('displayNone');
    color4.classList.add('displayNone');
    main.style.gridTemplateColumns = '1fr 1fr 1fr';
    color1.style.backgroundColor = 'hsl(' + randHue + ','+saturation+','+lightness+')';
    color1out.textContent = color1.style.backgroundColor;
    color2.style.backgroundColor = 'hsl(' + ((randHue+phi+180)%360) + ','+saturation+','+lightness+'';
    color2out.textContent = color2.style.backgroundColor;
    color3.style.backgroundColor = 'hsl(' + ((randHue-phi+180)%360) + ','+saturation+','+lightness+')';
    color3out.textContent = color3.style.backgroundColor;

}
function generateTetradColor(){
    let phi = 45;

    let randHue = Math.random()*360;
    color3.classList.remove('displayNone');
    color4.classList.remove('displayNone');
    main.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    color1.style.backgroundColor = 'hsl(' + randHue + ','+saturation+','+lightness+')';
    color1out.textContent = color1.style.backgroundColor;
    color2.style.backgroundColor = 'hsl(' + ((randHue+phi)%360) + ','+saturation+','+lightness+'';
    color2out.textContent = color2.style.backgroundColor;
    color3.style.backgroundColor = 'hsl(' + ((randHue+180)%360) + ','+saturation+','+lightness+')';
    color3out.textContent = color3.style.backgroundColor;
    color4.style.backgroundColor = 'hsl(' + ((randHue+phi+180)%360) + ','+saturation+','+lightness+')';
    color4out.textContent = color4.style.backgroundColor;
}
generateComplimentaryColor();