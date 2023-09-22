function butcli(val){
    document.getElementById("input").value+=val
}
function clearinput(){
    document.getElementById("input").value=""
}
function equalbut(){
    var text=document.getElementById("input").value
    var ans= eval(text)
    document.getElementById("input").value=ans
}