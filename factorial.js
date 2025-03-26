const inputHTML = document.getElementById("entrada");
const submitBttn = document.getElementById("submit");
const resultHTML = document.getElementById("result");


inputHTML.addEventListener('change', () => {
    if(inputHTML.value < 0){
        inputHTML.value = 0;
    }
});

submitBttn.addEventListener('click', (event) => {
    event.preventDefault();
    resultHTML.innerHTML = calcularFatorial(inputHTML.value);
});

function calcularFatorial(number){
    if(number == 0 || number == 1){
        return `${number}`;
    }

    var result = Number(number);

    for(var n = Number(number) - 1; n > 0; n--){
        if(n == 1){
            return `${result}`;
        }
        result = result * n;
    }
}