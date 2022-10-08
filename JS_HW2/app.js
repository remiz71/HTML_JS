//calc

function calc(){
    while (true) {
        const a = +prompt('Введите первое число');
        const b = +prompt('Введите второе число');
        const op = prompt('Выберете знак - + / *');
        alert(eval(`${a}${op}${b}`));

        if (!confirm('Хотите ли вы решить еще один пример?')) break;
    }
}

//Color
function color(opt, fig)
{
    let c = document.getElementById(fig.value);
    fig.value == "trap"?c.style.borderBottomColor = opt.value:c.style.backgroundColor = opt.value;
}
//analysis
function analysis(){
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let odd = 0;
    let even = 0;
    for (let i = 0; i<10;i++)
    {
        let a = +prompt(`Введите ${i} число`);
        a>0?pos++:a==0?zero++:neg++;
        a%2==0?even++:odd++;

    }
    confirm(`Положительных чисел: ${pos}, отрицательных чисел: ${neg}, нулей : ${zero}, Четных чисел: ${even} , Нечетных чисел : ${odd}`);
}
