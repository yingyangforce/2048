const tileArr = [];
const screenheight = 500;
const screenwidth = 500;
const bgsquares = new BGSquares(screenheight, screenwidth);

function setup() {
    createCanvas(screenwidth, screenheight);

    newTile(bgsquares);

    console.log(bgsquares);
    console.log(tileArr);
}

function newTile(bgsquares, x = 0, y = 0, val = null) {
    const tile = new Tile(x, y, bgsquares, val);
    tileArr.push(tile);
}

function fillTileArr(bgsquares) {
    for (let i = 0; i < bgsquares.gridHeight; i++) {
        for (let j = 0; j < bgsquares.gridWidth; j++) {
            let tile = new Tile(i, j, bgsquares);
            tileArr.push(tile);
        }
    }
}

function updateAllCords(xdir, ydir) {
    for (let i in tileArr) {
        if (((tileArr[i].x + xdir) < 0) || ((tileArr[i].x + xdir) > bgsquares.gridWidth - 1)) {
            console.log(`Bump: ${tileArr[i].x} ${tileArr[i].y}`);
            continue;
        } else if (((tileArr[i].y + ydir) < 0) || ((tileArr[i].y + ydir) > bgsquares.gridHeight - 1)) {
            console.log(`Bump: ${tileArr[i].x} ${tileArr[i].y}`);
            continue;
        }

        if (tileArr[i]) {
            tileArr[i].updateCords(xdir, ydir, bgsquares);
        }
    }
}

function keyPressed() { //updates cords in (x, y) dir
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

