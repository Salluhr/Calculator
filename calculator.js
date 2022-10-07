function view(num)
{
    document.getElementById('result').value+= num
}
function compute(){
    let a = Number(document.getElementById('result'))
    let b = eval(a)
    document.getElementById('result').value = b
}


function clr() {
     document.getElementById('result').value="";
}

 