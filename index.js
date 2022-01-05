let input = document.getElementById('myRange');
genDivs(20);

input.addEventListener('change', function(e){
    input.value = e.target.value;
    console.log(input.value);
    document.getElementById('grid').innerHTML = "";
    genDivs(input.value);
});

function genDivs(num){
    for (let i = 0;i < num * num; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        document.getElementById('grid').appendChild(cell);
    };
    document.getElementById('grid').style.gridTemplateColumns = "auto ".repeat(num);
};
