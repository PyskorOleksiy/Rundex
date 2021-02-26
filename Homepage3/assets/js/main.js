var canvas = document.getElementById('relationship1');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "#14396D";
ctx.globalAlpha = 0.2;
ctx.lineWidth = 2;
ctx.setLineDash([20,10]);

ctx.moveTo(0,60);
ctx.quadraticCurveTo(50,-65,150,100);
ctx.quadraticCurveTo(200,150,400,0);
//ctx.quadraticCurveTo(50,-75,400,200);
ctx.stroke();

var canvas = document.getElementById('relationship2');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "#14396D";
ctx.globalAlpha = 0.2;
ctx.lineWidth = 2;
ctx.setLineDash([20,10]);

ctx.moveTo(0,60);
ctx.quadraticCurveTo(50,-65,150,100);
ctx.quadraticCurveTo(200,150,400,0);
//ctx.quadraticCurveTo(50,-75,400,200);
ctx.stroke();