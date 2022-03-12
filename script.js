function changeColor(){
    let randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.querySelector("#result").innerHTML = randomColor
}
function selectColor(){
    let inptcolor = document.querySelector("#select").value
    document.body.style.backgroundColor = inptcolor;
    document.querySelector("#result").innerHTML = inptcolor

}
