let bird;
let pipes = [];
function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.show();
    bird.update();

    addPipe();
    removePipe();
}

function addPipe() {
    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    } 

    pipes.forEach((pipe, i) => {
        pipe.show();
        pipe.update();
        removePipe(pipe, i);
   })
}

function removePipe(pipe, i) {
    if(pipe && pipe.offscreen()) {
        pipes.splice(i, 1);
    }
    
}

function keyPressed() {
    if (key == ' ') {
        bird.up(); 
    }
}