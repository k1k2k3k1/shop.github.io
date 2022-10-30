let result="";
let button=document.querySelectorAll(".btn");
Array.from(button).forEach((button)=>{
button.addEventListener("click",(e)=>{
if(e.target.innerHTML == "="){
    result=eval(result);
    document.querySelector(".display").value=result;
}
 else if(e.target.innerHTML == "C"){
    result="";
    document.querySelector(".display").value=result;
}
else{
    console.log(result)
    result = result + e.target.innerHTML;
    document.querySelector(".display").value=result;
}
})
})