let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");


function validInput(input){
    input.value = input.value.replace(/[^01.]/g,'');
}

function calcDecimal(isFloat,val) {

    
    let n = val.length;
    let sum = 0;
    console.log(val);

    

    if(isFloat){
        for(let i = 0; i < n; i++){

            if(val[i] === '.'){
                let len = i;
                n = n - i - 1;

                for(let j = 0; j < n; j++,i++){
                    let calc = val[i + 1] / 2 ** (j+1);
                    sum += calc;
                }

                for(let k = 0; k < len; k++){
                    let calc = val[k] * (2**(len-k-1));
                    sum = sum + calc;
                }
            }
        }
    }else{
        for(let k = 0; k < n; k++){
            let calc = val[k] * (2**(n - k - 1));
            sum = sum + calc;
        }
    }
    return sum;
}

function result(sum){
    output.innerHTML = `(${input.value})<sub>2</sub> = (${sum})<sub>10</sub>`;
    console.log(sum);
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let val = input.value;
    let isFloat = false;
    let countDot = 0;
    for(let l = 0; l < val.length; l++){
        if(val[l] === '.'){
            isFloat = true;
            countDot++;
        }
    }

    if(input.value === ''){
        window.alert("Enter The Value.");
    }else if(countDot > 1){
        window.alert("Enter The Valid value.");
    }else{
        let sum = calcDecimal(isFloat,val);
        result(sum);
    }
});
 