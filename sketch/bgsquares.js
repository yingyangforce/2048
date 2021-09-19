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
                this.arr[i][j] = {
                    x: j,
                    y: i,
                    screenx: screenwidth * (j * 0.25),
                    screeny: screenheight * (i * 0.25)
                };
            }
        }
    }

    draw() {
        fill(69); //Nice.
        rectMode(CORNER);
        
        for (let i of this.arr) {
            for (let j of i) {
                fill(59, 30, 30); //Nice.
                stroke(254);
                rect(j.screenx, j.screeny, this.size, this.size); 
            }
        }
    }
}