var numSquares=6
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.getElementById("message")
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){/*initially when page loads */
    /*code for modeButtons */
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent=== "Easy" ? numSquares=3: numSquares=6;
            /*if(this.textContent==="Easy"){
                numSquares=3;
            }
            else{
                numSquares=6;
            }*/
            reset();
        })
    }
}
function setupSquares(){
    for(var i=0;i<squares.length;i++){
    
        /*add click listeners to sqaures  */
        squares[i].addEventListener("click",function(){
            /* grab color of clicked square*/ 
            var clickedColor=this.style.backgroundColor;/*stores in rgb format */
            /*compare the color to picked color */
            if(clickedColor===pickedColor){
                messageDisplay.textContent="Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor=clickedColor;
                resetButton.textContent="Play Again?"
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try again"
            }
        })
    }
}

function reset(){
     /*generate random colors */
     colors=generateRandomColors(numSquares);
     /*pick a random color from array */
     pickedColor=pickColor();
     /*change color display to picked color */
     colorDisplay.textContent=pickedColor;
     /*change colors of squares */ 
     for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block"/*for 6 square case*/
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";/*when numSquares=3, color[4],color[5],color[6] doesn't contain anything or is zero. So executed in 'else' and change the color of the rest 3 squares*/
        }
     }
     h1.style.backgroundColor="steelblue";
     messageDisplay.textContent="";
     resetButton.textContent="New Colors";
}
/*
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];/*here colors array contains 3 colors,if they are present then change color */
        /*}
        else{
            squares[i].style.display="none";/*color[4],color[5],color[6] doesn't contain anything or is zero. So executed in else and change the color of the rest 3 squares*/
        /*}
    }

})
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})*/

resetButton.addEventListener("click",function(){
    reset();

})



function changeColor(color){
    /*loop through all squares */
    for(var i=0;i<squares.length;i++){
        /*change each color to match given color */
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);/*Math.random() picks a no b/w 0&1 excluding 1.Multiply it with array length. Math.Floor() method gives a whole no*/
    return colors[random];/*picks any random color*/
}
function generateRandomColors(num){
    /*create an array*/
    var arr=[];
    
    for(i=0;i<num;i++){
        /*get num random colors and push to array*/
        arr.push(randomColor());

    }
    /*return the array */
    return arr;

}
function randomColor(){
    /*pick a red from 0-255*/
    var r=Math.floor(Math.random() * 256);/*256 bec it excludes the no till it is made(excludes 256, includes 255)*/
    /*pick a green from 0-255*/
    var g=Math.floor(Math.random() * 256);
    /*pick a blue from 0-255*/
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b +")";/*add space after ',' or else it won't work*/

}