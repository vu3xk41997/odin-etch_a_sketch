// When browser loads
genDivs(20);
hoverChangeColor("black");

let range = document.getElementById('myRange');
range.addEventListener('change', function(e){
    range.value = e.target.value;
    document.getElementById('grid').innerHTML = "";
    genDivs(range.value);
    hoverChangeColor(pickColor.value);
});

function genDivs(num){
    for (let i = 0;i < num * num; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        document.getElementById('grid').appendChild(cell);
    };
    document.getElementById('grid').style.gridTemplateColumns = "auto ".repeat(num);
};

function hoverChangeColor(color){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = color;
    }))
};

// input - pickColor
let pickColor = document.getElementById('pickColor');
pickColor.addEventListener('input', function(e){
    hoverChangeColor(e.target.value);
});

// button - color
let color = document.getElementById('color');
color.addEventListener('click', function(e){
    hoverChangeColor(pickColor.value);
});

// buttons - rainbow
let rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', function(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function(){
        cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }));
});

// buttons - eraser
let eraser = document.getElementById('eraser');
eraser.addEventListener('click',function(){
    hoverChangeColor("white");
})

// buttons - clear
let clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    document.getElementById('grid').innerHTML = "";
    genDivs(range.value);
    hoverChangeColor(pickColor.value);
})