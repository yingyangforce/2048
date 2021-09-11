let bgsquares;
let tileArr = [];
let tile;
let tile2;

function setup() {
    createCanvas(500, 500);
    bgsquares = new BGSquares();
    bgsquares.initArr();
    //fillBoxes();
    tile = new Tile(0, 0, bgsquares);
    tile2 = new Tile(0, 1, bgsquares);
    tileArr.push(tile);
    tileArr.push(tile2);
}

function fillBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tile = new Tile(i, j);
           
            tileArr.push(tile);
        }
    }
}

function updateAllCords(xdir, ydir) {
    for (let i = 0; i < tileArr.length; i++) {
        if (tileArr[i]) {
            tileArr[i].updateCords(xdir, ydir, bgsquares);
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
    for (let i = 0; i < tileArr.length; i++) {
        if (tileArr[i]) {
            tileArr[i].draw();
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

