const btn = document.getElementById('btn');

const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    let arr = []; 
    for (var i = 0; i<3; i++){
        arr[i] = arr[i] || []; 
            arr[i].push(getRandomNumber()); 
    }
    arr = 'rgba(' + arr.map(sub => sub.join(',')) + ')'; 
    color.textContent = arr;
    document.body.style.backgroundColor = arr;
});

function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}


