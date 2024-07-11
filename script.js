var res = document.getElementById('res');
var buttons = document.querySelectorAll('button');
var c = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isNaN(button.innerHTML) & c < 12) {
            res.innerHTML += button.innerHTML;
            op = 0;
            c += 1;
        } else if (button.innerHTML == '.' & c > 0) {
            let lastchar = res.innerHTML.split(/[\+\-\*\/]/).pop();
            if (!lastchar.includes('.')) {
                res.innerHTML += button.innerHTML;
                c += 1;
            }
        }
    });
});

function operator(oper){
    if (op === 1 || c >= 11 || res.innerHTML == '') {
        return;
    } else if (c < 12) {
        res.innerHTML += oper;
        op = 1;
        c += 2;
    }
}

function negative(){
    
}

function restart(){
    res.innerHTML = '';
    op = 0;
    c = 0;
}

function calculate(){
    let equacao = res.innerHTML
    if (equacao.endsWith(' ')) {
        equacao = equacao.slice(0, -2)
    }

    let resultado = eval(equacao)

    if (resultado == undefined) {
        res.innerHTML = 0
    } else {
        res.innerHTML = resultado.toString().slice(0, 12)
    }
    c = res.innerHTML.length;
    op = 0;
}