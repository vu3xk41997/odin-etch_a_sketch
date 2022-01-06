let input = document.getElementById('myRange');
// When browser loads
genDivs(20);
hoverChangeColor("black");

input.addEventListener('change', function(e){
    input.value = e.target.value;
    document.getElementById('grid').innerHTML = "";
    genDivs(input.value);
    hoverChangeColor(getRandomColor());
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

// buttons - rainbow
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// buttons - eraser
let eraser = document.getElementById('eraser');
eraser.addEventListener('click',function(){
    hoverChangeColor("white");
})

// buttons - clear
let clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    document.getElementById('grid').innerHTML = "";
    genDivs(input.value);
    hoverChangeColor(pickColor.value);
})