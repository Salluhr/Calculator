 function view(num)
{
    document.getElementById('result').value+= num
}
function compute(){
    let a = document.getElementById('result').value
    let b = eval(a)
    document.getElementById('result').value = b
}


function clr() {
     document.getElementById('result').value="";
}
 
