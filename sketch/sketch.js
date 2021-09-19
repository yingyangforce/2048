const tileArr = [];
const screenheight = 500;
const screenwidth = 500;
const bgsquares = new BGSquares(screenheight, screenwidth);

function setup() {
    createCanvas(screenwidth, screenheight);

    initTileArr();
    newTile();

    console.log(bgsquares);
    console.log(tileArr);
}

//inits new tile, also passes bgsquares and tileArr
function newTile(x = 0, y = 0, val = null) {
    const tile = new Tile(x, y, tileArr, val);
    tileArr[y][x] = tile;
}

function initTileArr() {
    for (let i = 0; i < bgsquares.gridHeight; i++) {
        tileArr[i] = [];
        for (let j = 0; j < bgsquares.gridWidth; j++) {
            tileArr[i].push(null);
        }
    }
}

//fill tile arr w val null tiles
function fillTileArr() {
    for (let i = 0; i < tileArr.length; i++) {
        for (let j = 0; j < tileArr[0].length; j++) {
            newTile(i, j);
        }
    }
}

//updates cords of all tiles
//TODO: update w/ new tileArr struct
//      split into horiz and vert functions?
function updateAllCords(xdir, ydir) {
    if (xdir != 0) {
        updateXCords(xdir);
    } else {
        updateYCords(ydir);
    }
}

function updateXCords(xdir) {

}

function updateYCords(ydir) {

}

//update cords on keypresses
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

//calls draw() method on available tile instances
function drawTiles() {
    for (let i = 0; i < tileArr.length; i++) {
        for (let j = 0; j < tileArr[0].length; j++) {
            if (tileArr[i][j] != null) {
                tileArr[i][j].draw();
            }
        }
    }
}

function draw() {
    background(100);
    //noStroke();
    fill(69); 
    
    bgsquares.draw();
    drawTiles();
}

