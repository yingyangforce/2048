let bgsquares;
let tileArr = [];

function setup() {
    createCanvas(500, 500);
    bgsquares = new BGSquares();
    bgsquares.initArr();
    
    let tile = new Tile(0, 0, bgsquares);
    let tile2 = new Tile(0, 1, bgsquares);
    tileArr.push(tile);
    tileArr.push(tile2);
    console.log(bgsquares);
}

function fillTileArr() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tile = new Tile(i, j);
           
            tileArr.push(tile);
        }
    }
}

function updateAllCords(xdir, ydir) {
    for (let i in tileArr) {
        if (((tileArr[i].x + xdir) < 0) || ((tileArr[i].x + xdir) > bgsquares.gridWidth - 1)) {
            return;
        } else if (((tileArr[i].y + ydir) < 0) || ((tileArr[i].y + ydir) > bgsquares.gridHeight - 1)) {
            return;
        }

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

