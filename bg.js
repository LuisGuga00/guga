const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {x:null,y:null};

window.addEventListener("mousemove",(event)=>{
mouse.x = event.x;
mouse.y = event.y;
});

class Particle{

constructor(x,y){

this.x = x;
this.y = y;

this.size = 1.5;

this.vx = (Math.random()-0.5)*0.5;
this.vy = (Math.random()-0.5)*0.5;

}

draw(){

ctx.fillStyle="#7c26a3ff";

ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();

}

update(){

this.x += this.vx;
this.y += this.vy;

let dx = this.x - mouse.x;
let dy = this.y - mouse.y;

let distance = Math.sqrt(dx*dx + dy*dy);

if(distance < 50){

this.x += dx/15;
this.y += dy/15;

}

if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
if(this.y < 0 || this.y > canvas.height) this.vy *= -1;

}

}

let particles = [];

function init(){

particles=[];

for(let i=0;i<2000;i++){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

particles.push(new Particle(x,y));

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.update();
p.draw();
});

requestAnimationFrame(animate);

}

init();
animate();