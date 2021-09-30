class Tile {
    constructor(x = 0, y = 0, tileArr, val = null) {
        this.x = x;
        this.y = y;
        this.val = val;
        //some math to make work with 0-4 cords
        this.screenx = width * (.125 + 2 * (.125 * this.x));
        this.screeny = height * (.125 + 2 * (.125 * this.y));
    }

    updateX(x) {
        this.x = x;
        //some math to convert index to pixel cords
        this.screenx = width * (.125 + 2 * (.125 * this.x));
    }

    updateY(y) {
        this.y = y;
        //some math to convert index to pixel cords
        this.screeny = height * (.125 + 2 * (.125 * this.y));
    }

    updateCords(x, y) {
        this.updateX(x);
        this.updateY(y);
    }

    draw() {
        fill(200);
        rectMode(CENTER);
        rect(this.screenx, this.screeny, 100, 100, 10);
        
        if (this.val) {
            textSize(24);
            textAlign(CENTER, CENTER);
            textStyle(BOLD);
            fill(69); //Nice.
            text(`${this.val}`, this.screenx, this.screeny);
        }
    }
}