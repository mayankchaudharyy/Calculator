let allBtn = document.querySelectorAll(".black, .white");
let typing = document.querySelector(".typing");
let result = document.querySelector(".result");
let input = [];
let input_solve = [];
let ans = 0;
let flag = 1;
let twoOperator = 0;
let tap = 0;

allBtn.forEach((ele)=>{
    // console.log(ele.innerHTML);
    // if(ele.innerText === ""){
    //     console.log('b gotcha');
    // }
    ele.addEventListener('click',()=>{
        typing.focus();
        addInTyping(ele.innerText);
        anime(ele);
    })
});


function addInTyping(ele){
    switch (ele) {
        case "C":
            input = [];
            input_solve = [];
            result.innerText = '00';
            typing.value = '';
            result.style.fontSize = "16px";
            typing.style.fontSize = "24px";
            ans = 0;
            break;
        case "%":
            if(twoOperator >= 1){
                break;
            }
            twoOperator = 1;
            input.push("%");
            input_solve.push("%");
            typing.value += ' %';
            twoOperator = 1;
            break;
        case "÷":
            if(twoOperator >= 1){
                break;
            }
            twoOperator = 1;
            input.push("/");
            input_solve.push("÷");
            typing.value += ' ÷';
            break;
        case "X":
            if(twoOperator >= 1){
                break;
            }
            twoOperator = 1;
            input.push("*");
            input_solve.push("X");
            typing.value += ' X';
            break;
        case "-":
            if(twoOperator === 2){
                break;
            }
            twoOperator += 1;
            input.push("-");
            input_solve.push("-");
            typing.value += ' -';
            break;
        case "+":
            if(twoOperator >= 1){
                break
            }
            twoOperator = 1;
            input.push("+");
            input_solve.push("+");
            typing.value += ' +';
            break;
        case "=":
            if(twoOperator === 1 && tap === 0){
                break;
            }
            twoOperator = 1;
            if(tap === 0){
                ans = solve();
            }
            tap += 1;
            if(tap == 2){
                typing.value = ans + "";
                input = [];
                input_solve = [];
                input.push(ans);
                input_solve.push(ans+"");
                twoOperator = 0;
                tap = 0;
                result.innerText = 0;
                result.style.fontSize = "16px";
                typing.style.fontSize = "24px";
                // typing.style.fontWeight = "600";
                break;
            }
            result.innerText = ans;
            result.style.fontSize = "24px";
            typing.style.fontSize = "16px";
            typing.style.fontWeight = "300";
            break;
        case "":
            let str = input_solve[input_solve.length-1];
            if(str.length > 1){
                str = str.substring(0, str.length - 1);
                input_solve[input_solve.length-1] = str;
            }else{
                input_solve.pop();
            }
            console.log(input_solve[input_solve.length-1]);
            input.pop();
            let make = input_solve.join(" ");
            typing.value = make;
            break;
        case '.':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '.';
                    }else{
                        input_solve.push('0.');
                    }
                       typing.value += '.';
                }else{
                    input_solve.push('0.');            
                    typing.value += ' 0.';
                }
                input.push(0);
                break;
            }
            typing.value += '.';
            input_solve.push('0.');
            input.push(0);
            break;
        case '1':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '1';
                    }else{
                        input_solve.push('1');
                    }
                       typing.value += '1';
                }else{
                    input_solve.push('1');            
                    typing.value += ' 1';
                }
                input.push(1);
                break;
            }
            typing.value += '1';
            input_solve.push('1');
            input.push(1);
            break;
        case '2':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '2';
                    }else{
                        input_solve.push('2');
                    }
                    typing.value += '2';
                }else{
                    typing.value += ' 2';
                    input_solve.push('2');
                }
                input.push(2);
                break;
            }
            typing.value += '2';
            input_solve.push('2');
            input.push(2);
            break;
        case '3':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '3';
                    }else{
                        input_solve.push('3');
                    }
                       typing.value += '3';
     
                }else{
                    input_solve.push('3');            
                    typing.value += ' 3';
                }
                input.push(3);
                break;
            }
            typing.value += '3';
            input_solve.push('3');
            input.push(3);
            break;
        case '4':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '4';
                    }else{
                        input_solve.push('4');
                    }
                    typing.value += '4';
                }else{
                    typing.value += ' 4';
                    input_solve.push('4');
                }
                input.push(4);
                break;
            }
            typing.value += '4';
            input_solve.push('4');
            input.push(4);
            break;
        case '5':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '5';
                    }else{
                        input_solve.push('5');
                    }
                    typing.value += '5';
                }else{
                    typing.value += ' 5';
                    input_solve.push('5');
                }
                input.push(5);
                break;
            }
            typing.value += '5';
            input_solve.push('5');
            input.push(5);
            break;
        case '6':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '6';
                    }else{
                        input_solve.push('6');
                    }
                    typing.value += '6';
                }else{
                    typing.value += ' 6';
                    input_solve.push('6');
                }
                input.push(6);
                break;
            }
            typing.value += '6';
            input_solve.push('6');
            input.push(6);
            break;
        case '7':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '7';
                    }else{
                        input_solve.push('7');
                    }
                    typing.value += '7';
                }else{
                    typing.value += ' 7';
                    input_solve.push('7');
                }
                input.push(7);
                break;
            }
            typing.value += '7';
            input_solve.push('7');
            input.push(7);
            break;
        case '8':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '8';
                    }else{
                        input_solve.push('8');
                    }
                    typing.value += '8';
                }else{
                    typing.value += ' 8';
                    input_solve.push('8');
                }
                input.push(8);
                console.log(input_solve);
                break;
            }
            typing.value += '8';
            input_solve.push('8');
            input.push(8);
            break;
        case '9':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '9';
                    }else{
                        input_solve.push('9');
                    }
                    typing.value += '9';
                }else{
                    typing.value += ' 9';
                    input_solve.push('9');
                }
                input.push(9);
                break;
            }
            typing.value += '9';
            input_solve.push('9');
            input.push(9);
            break;
        case '00':
            twoOperator = 0;
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '00';
                    }else{
                        input_solve.push('00');
                    }
                    typing.value += '00';
                }else{
                    typing.value += ' 00';
                    input_solve.push('00');
                }
                input.push(0);
                input.push(0);
                break;
            }
            typing.value += '00';
            input_solve.push('00');
            input.push(0);
            input.push(0);
            break;
        case '0':
            twoOperator = 0;
            console.log(input_solve);
            if(input.length >= 1){
                if(typeof(input[input.length-1]) === typeof(1)){
                    if(input_solve.length >= 1){
                        input_solve[input_solve.length-1] = input_solve[input_solve.length-1] + '0';
                    }else{
                        input_solve.push('0');
                    }
                    typing.value += '0';
                }else{
                    typing.value += ' 0';
                    input_solve.push('0');
                }
                input.push(0);
                break;
            }
            typing.value += '0';
            input_solve.push('0');
            input.push(0);
            break;
        default:
            break;
    }
}



function solve(){
    input_solve = input_solve.join(" ").replace('X','*');
    return eval(input_solve);
}

function anime(ele){
    ele.classList.add("pressed");
    setTimeout(function() {
        ele.classList.remove("pressed");
      }, 100);
}