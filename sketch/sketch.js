const tileArr = [];
const screenheight = 500;
const screenwidth = 500;
const bgsquares = new BGSquares(screenheight, screenwidth);

function setup() {
    createCanvas(screenwidth, screenheight);

    initTileArr(bgsquares);

    newTile(0, 0, 2);
    newTile(0, 1, 2);
    newTile(1, 1, 2);
    newTile(2, 1, 2);
    newTile(2, 2, 2);
    newTile(3, 3, 8);

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
function initTileArr(bgsquares) {
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

//make arr of tiles, checks for like vals & concats, adds nulls
function updateXCords(xdir) { 
    let anythingmoved = false;
    for (row of tileArr) {
        //skip row if empty, less indentation
        if (row.every(member => member === null)) { continue; }
        //return truw if any member !== null

        const rowtiles = row.filter(member => member !== null);
        
        if (xdir === 1) {
            rowtiles.reverse();
        }

        for (let i = 0; i < rowtiles.length; i++) {
            if (rowtiles[i + 1]) {
                if (rowtiles[i].val === rowtiles[i + 1].val) {
                    rowtiles[i].val *= 2;
                    rowtiles.splice(i + 1, 1);
                }
            }
            if (xdir == 1) {
                if (rowtiles[i].x !== row.length - i - 1) {
                    anythingmoved = true;
                }
                rowtiles[i].updateX(row.length - i - 1);
            } else {
                if (rowtiles[i].x !== row.length - i - 1) {
                    anythingmoved = true;
                }
                rowtiles[i].updateX(i);
            }
        }
        
        if (xdir === 1) {
            rowtiles.reverse();
        }

        const numnulls = row.length - rowtiles.length;
        
        if (xdir === 1) {
            for (let i = 0; i < numnulls; i++) {
                rowtiles.unshift(null);
            }
            console.log(`New row:${tileArr.indexOf(row)}`, rowtiles);
        } else {
            for (let i = 0; i < numnulls; i++) {
                rowtiles.push(null);
            }
            console.log(`New row:${tileArr.indexOf(row)}`, rowtiles);
        }
        tileArr[tileArr.indexOf(row)] = rowtiles;
    }
    if (anythingmoved) {
        console.log("Something moved.");
    } else {
        console.log("Nothing moved.");
    }
}

//tileArr arrays should be same length, take indexes from first array
function updateYCords(ydir) {
    let anythingmoved = false;

    for (index in tileArr[0]) {
        //makes col array out of row arrs @ index index
        const col = tileArr.map(member => member[index]);

        if (col.every(member => member === null)) { continue; }

        const coltiles = col.filter(member => member !== null);

        if (ydir === 1) {
            coltiles.reverse();
        }

        for (let i = 0; i < coltiles.length; i++) {
            if (coltiles[i + 1]) {
                if (coltiles[i].val === coltiles[i + 1].val) {
                    coltiles[i].val *= 2;
                    coltiles.splice(i + 1, 1);
                }
            }
            if (ydir == 1) {
                if (coltiles[i].y !== col.length - i - 1) {
                    anythingmoved = true;
                }
                coltiles[i].updateY(col.length - i - 1);
            } else {
                if (coltiles[i].y !== col.length - i - 1) {
                    anythingmoved = true;
                }
                coltiles[i].updateY(i);
            }
        }
        
        if (ydir === 1) {
            coltiles.reverse();
        }

        const numnulls = col.length - coltiles.length;
        
        if (ydir === 1) {
            for (let i = 0; i < numnulls; i++) {
                coltiles.unshift(null);
            }
            console.log(`New col:${index}`, coltiles);
        } else {
            for (let i = 0; i < numnulls; i++) {
                coltiles.push(null);
            }
            console.log(`New col:${index}`, coltiles);
        }
        //TODO: MAKE THIS WORK FOR INDEX OF ROW INSTEAD OF ROWS
        //tileArr[tileArr.indexOf(row)] = rowtiles;
        for (row in tileArr) {
            tileArr[row][index] = coltiles[row];
        }
    }

    if (anythingmoved) {
        console.log("Something moved.");
    } else {
        console.log("Nothing moved.");
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
    for (row of tileArr) {
        for (tile of row) {
            if (tile != null) {
                tile.draw();
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

