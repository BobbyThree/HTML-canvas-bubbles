// setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//globals
const circlesArray = [];

//resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;  
})



class Circle {
  constructor() {
    this.radius = Math.random() * 20 + 5;
    this.x = this.radius + Math.random() * (canvas.width - this.radius * 2);
    this.y = this.radius + Math.random() * (canvas.height - this.radius *  2);    
    this.color = `hsl(${Math.random() * 360} 50% 50%)`
    this.vx = Math.random() * -3 + 1.5;
    this.vy = Math.random() * -3 + 1.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.lineWidth = 1.5;    
    ctx.strokeStyle = this.color;
    ctx.stroke();        
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
  }
}

function initCircles() {
  for (let i = 0; i < 108; i++) {
    circlesArray.push(new Circle());
  }
}
initCircles();

function handleCircles() {
  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
    circlesArray[i].update();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  handleCircles();
  requestAnimationFrame(animate);
}
animate();


