var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
widthofline=5;

canvas.addEventListener ("mousedown",mymousedown);
function mymousedown(e){
mouseEvent="mouseDown";

}
canvas.addEventListener ("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="mouseUP";

}
canvas.addEventListener ("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="mouseLeave";

}
canvas.addEventListener ("mousemove",mymousemove);
function mymousemove(e){
currentpositionofmousex=e.clientX-canvas.offsetLeft;
currentpositionofmousey=e.clientY-canvas.offsetTop;
if(mouseEvent="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
    ctx.moveTo(lastpositionofx,lastpositionofy);
    console.log("x = " + currentpositionofmousex + "y = " + currentpositionofmousey);
    ctx.lineTo(currentpositionofmousex,currentpositionofmousey);

}
lastpositionofx=currentpositionofmousex;
lastpositionofy=currentpositionofmousey;
}