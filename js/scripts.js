const init = function(){
     document.getElementById("button-cancel").addEventListener('click',reset);
     document.getElementById("button-send").addEventListener('click',send);
}
const reset =function(ev){
    document.getElementById("form-user").reset();
}
const send =function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    let ret= validate
}