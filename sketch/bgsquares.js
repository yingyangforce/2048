class BGSquares {
    constructor(screenheight, screenwidth) {
        this.screenheight = screenheight;
        this.screenwidth = screenwidth;
        this.size = screenheight * 0.25;
        this.arr = [];
        this.gridWidth = 4;
        this.gridHeight = 4;
        this.initArr();
    }

    initArr() {
        for (let i = 0; i < this.gridHeight; i++) {
            this.arr[i] = [];
            for (let j = 0; j < this.gridWidth; j++) {
                this.arr[i].push([]);
                this.arr[i][j] = {x: j, y: i, screenx: screenwidth * (j * 0.25), screeny: screenheight * (i * 0.25), hasTile: false};
            }
        }
    }

    /*
    fillArr(val) { 
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.arr[i][j].val = val;
            }
        }
    }
    */

    /* 
    shiftVals(dir) {
        if (dir === "up") {
            print("sup");
            for (let i = 1; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (this.sarr[i - 1][j].val == null) {
                        this.sarr[i - 1][j].val == this.sarr[i][j].val;
                    }
                }
            }    
        }
        print(dir);
    }
    */
    
    numTilesInRow(row) {
        let numTiles = 0;
        for (let i = 0; i < 3; i++) {
            if (this.arr[row][i].hasTile) {
                numTiles += 1;
            }
        }
        return numTiles;
    }
    
    numTilesInCol(col) {
        let numTiles = 0;
        for(let i = 0; i < 3; i++) {
            if (this.arr[i][col].hasBox) {
                numTiles += 1;
            }
        }
        return numTiles;
    }

    draw() {
        fill(69); //Nice.
        rectMode(CORNER);
        
        for (let i of this.arr) {
            for (let j of i) {
                fill(59, 30, 30); //Nice.
                stroke(254);
                rect(j.screenx, j.screeny, this.size, this.size); 
                
                /*
                textAlign(CENTER);
                fill(200);
                if (j.val != null) {
                    text(`${j.val}`, j.x + (this.size / 2), j.y + (this.size / 2));
                }
                */
            }
        }
    }
}