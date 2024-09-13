let display = "";
let x = document.getElementById("text-box")
function same(val) {
    return x.value = `${display = display + val}`
}
function clearDisplay() {
     return x.value = `${display = ''}`;
}

function equal() {
 return x.value = eval(display)
}
function del(){
    return x.value = `${display = display.slice(0,-1)}`
}