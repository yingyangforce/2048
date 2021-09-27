const tileArr = [];
const screenheight = 500;
const screenwidth = 500;
const bgsquares = new BGSquares(screenheight, screenwidth);

function setup() {
    createCanvas(screenwidth, screenheight);

    initTileArr();
    newTile(0, 0, 4);
    newTile(0, 1, 8);
    newTile(1, 1, 2);

    console.log(bgsquares);
    console.log(tileArr);
}

//init new tile, also passes bgsquares and tileArr
//  note: x,y cords are passed as cartesian
function newTile(x = 0, y = 0, val = null) {
    const tile = new Tile(x, y, tileArr, val);
    tileArr[y][x] = tile;
}

//make array filled w nulls
function initTileArr() {
    for (let i = 0; i < bgsquares.gridHeight; i++) {
        tileArr[i] = [];
        for (let j = 0; j < bgsquares.gridWidth; j++) {
            tileArr[i].push(null);
        }
    }
}

//fill tile arr w val null tiles
function nullOutTileArr() {
    for (let i = 0; i < tileArr.length; i++) {
        for (let j = 0; j < tileArr[0].length; j++) {
            newTile(i, j);
        }
    }
}

//fat arrow notation is very very nice
function updateXCords(xdir) { 
    for (row of tileArr) {
        //return truw if any member !== null
        if (row.some(member => member !== null)) {
            const rowtiles = row.filter(member => member !== null);
            console.log(`Row ${tileArr.indexOf(row)}`, rowtiles);
        }
    }
}

//tileArr arrays should be same length, take indexes from first array
function updateYCords(ydir) {
    for (index in tileArr[0]) {
        //makes col array out of row arrs @ index index
        const coltiles = tileArr.map(member => member[index]);
        console.log(`Col ${index}`, coltiles);
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
function drawTiles(tileArr) {
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
    drawTiles(tileArr);
}

