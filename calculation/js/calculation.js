'use strict';
const elementSelect = document.getElementById("calcType");
const elementA = document.getElementById ("a");
const elementB = document.getElementById ("b");
const elementResult=document.getElementById("result");

elementSelect.addEventListener("change"  ,update);
elementA.addEventListener("change", update);
elementB.addEventListener("change", update);

function update(){
    const result =calculate(
        Number(elementA.value),
        Number(elementB.value),
        elementSelect.value
 );
elementResult.innerHTML =result;
}
function calculate(a,b, calcType){
    let result;
    switch( calcType) {
        case "type-add":
            result =a+b;
            break;
            case "type-substract":
            result =a-b;
            break;
            case "type-multiply":
            result =a*b;
            break;
            case "type-divide":
            result =a/b;
            break;
    }
return result;
}

