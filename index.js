let inputField=document.getElementById("inputv");

let button=document.getElementById("btn");

let does=document.getElementById("does");

button.addEventListener('click',function(){

var par=document.createElement('p');

par.innerText=inputField.value;

does.appendChild(par);

inputField.value="";

par.addEventListener('click',function(){

par.style.textDecoration="line-through red";

})

par.addEventListener('dblclick',function(){

does.removeChild(par);

})

})
