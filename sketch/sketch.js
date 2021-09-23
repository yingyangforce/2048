const tileArr = [];
const screenheight = 500;
const screenwidth = 500;
const bgsquares = new BGSquares(screenheight, screenwidth);

function setup() {
    createCanvas(screenwidth, screenheight);

    initTileArr();
    newTile();
    newTile(1, 1, 3);

    console.log(bgsquares);
    console.log(tileArr);
}

//inits new tile, also passes bgsquares and tileArr
//  note: x,y cords are passed as cartesian
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

/*
//updates cords of all tiles
function updateAllCords(xdir, ydir) {
    if (xdir !== 0) {
        updateXCords(xdir);
    } else {
        updateYCords(ydir);
    }
}
*/

//fat arrow notation = wonderful
function updateXCords(xdir) { 
    for (row of tileArr) {
        //return truw if any member !== null
        if (row.some(member => member !== null)) {
            console.log(row.filter(member => member !== null));
        }
    }
}

function updateYCords(ydir) {
    for (row in tileArr) {
        if (tileArr[row].some(member => member !== null)) {
            for (col in tileArr[row]) {
                console.log(row, Number(col), tileArr[row][col]);
            }
        }
    }
}

//update cords on keypresses
function keyPressed() { //updates cords in (x, y) dir
    if (keyCode === UP_ARROW) {
        updateYCords(-1);
    } else if (keyCode === DOWN_ARROW) {
        updateYCords(1);
    } else if (keyCode === LEFT_ARROW) {
        updateXCords(-1);
    } else if (keyCode === RIGHT_ARROW) {
        updateXCords(1);
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

