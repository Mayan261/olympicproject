canvas = document.getElementById("Mycanvas");
 ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150,100,500,500);
ctx.stroke();

function show() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(360,380,40,0,7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(420,380,40,0,7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(480,380,40,0,7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(390,420,40,0,7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(450,420,40,0,7);
    ctx.stroke();
}
