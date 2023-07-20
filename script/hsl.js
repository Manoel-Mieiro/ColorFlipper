/*
hsl color
H: 0-360
S: 0-100
L: 0-100
*/

const btn = document.getElementById('btn');

const color = document.querySelector('.color');


btn.addEventListener('click', function () {
    let arr = [];
    arr.push(Math.floor(Math.random() * 360)); 

    for (var i = 1; i < 3; i++) {
        arr.push(getRandomNumber() + '%'); 
    }

    const hslColor = 'hsl(' + arr.join(',') + ')';
    color.textContent = hslColor;
    document.body.style.backgroundColor = hslColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * 100);
}


