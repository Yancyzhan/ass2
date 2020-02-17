var flag = false;
var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('button');
var last = document.getElementById('LastAnswer');
var current = document.getElementById('currentAnswer');
var clear = document.getElementById('clear');
var back = document.getElementById('back');
var equal = document.getElementById('equal');
var answer = document.getElementById('answer');

var InputNumber = function(object) {
    if(flag === true){
        flag = false;
        current.innerText = object.target.innerText;
    } else{
        current.innerText += object.target.innerText;
    }
}

var InputOperator = function(object){
    if(flag === true){
        flag = false;
    }
    current.innerText += object.target.innerText;
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', InputNumber);
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', InputOperator);
}

back.onclick = function(){
    let str = current.innerText.length;
    current.innerText = current.innerText.slice(0, str-1);
}

clear.onclick = function(){
    current.innerText = "";
}

equal.onclick = function(){
    let index = current.innerText;
    if(index.length !== 0 && index !== "Error"){
        let current_answer;
        try {
            current_answer = eval(index);
        } catch (e) {
            current_answer = "Error";
        }
        last.innerText = current_answer;
    }
    flag = true;
}

answer.onclick = function(){
    if(flag === true){
        flag = false;
        current.innerText = last.innerText;
    } else{
        current.innerText += last.innerText;
    }
}