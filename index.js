
// let num = document.getElementsByTagName('input');

function genDivs(num){
    for (let i = 0;i < num * num; i++){
        let cell = document.createElement('div');
        cell.className = "cell";
        document.getElementById('grid').appendChild(cell);
        cell.style.padding = 180/num + 'px';
    };
    document.getElementById('grid').style.gridTemplateColumns = "auto ".repeat(num);
};

// function  

genDivs(40);