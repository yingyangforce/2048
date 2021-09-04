let bgsquares;
let boxArr = [];
let box;
let box2;

function setup() {
    createCanvas(500, 500);
    bgsquares = new BGSquares();
    bgsquares.initArr();
    //fillBoxes();
    box = new Box(0, 0, bgsquares);
    box2 = new Box(0, 1, bgsquares);
    boxArr.push(box);
    boxArr.push(box2);
}

function fillBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let box = new Box(i, j);
            boxArr.push(box);
        }
    }
}

function updateAllCords(xdir, ydir) {
    for (let i = 0; i < boxArr.length; i++) {
        if (boxArr[i]) {
            boxArr[i].updateCords(xdir, ydir, bgsquares);
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        updateAllCords(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        updateAllCords(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        updateAllCords(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        updateAllCords(1, 0);
    }
}

function drawBoxes() {
    for (let i = 0; i < boxArr.length; i++) {
        if (boxArr[i]) {
            boxArr[i].draw();
        }
    }
}

function draw() {
    background(100);
    //noStroke();
    fill(69); 
   // box.updateCords(0, 0);
    bgsquares.draw();
    drawBoxes();
}

