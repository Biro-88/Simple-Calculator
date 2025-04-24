const buttonsEl = document.querySelectorAll("button");
const inputEl=document.getElementById("result")

for( let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",() =>{
    const buttonValue = buttonsEl[i].textContent;
        if( buttonValue==="C"){
            clearResult();
        } 
        
        else if(buttonValue==="=") {
            findResult();
        } 
        
        else if(buttonValue==="X") {
            deleteResult();
        }
        else{
            appendvalue(buttonValue);
        }
    });
}
function clearResult(){
    inputEl.value="";
}

function findResult(){
    inputEl.value=eval(inputEl.value);
}

function  deleteResult(){
    inputEl.value = inputEl.value.slice(0, -1);
}

function appendvalue(buttonValue){
    inputEl.value += buttonValue;
}




