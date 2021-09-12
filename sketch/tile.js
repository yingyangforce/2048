class Tile {
    constructor(x, y, bgsquares) {
        this.x = x;
        this.y = y;
        //some math to make work with 0-4 cords
        this.screenx = width * (.125 + 2 * (.125 * this.x));
        this.screeny = height * (.125 + 2 * (.125 * this.y));
        this.val = null;
        bgsquares.arr[y][x].hasTile = true;
    }

    updateCords(xdir, ydir, bgsquares) {
        if (bgsquares.arr[this.y + ydir][this.x + xdir].hasTile) {
            console.log("beep");
        } else {
            bgsquares.arr[this.y][this.x].hasTile = false;
            this.x += xdir;
            this.y += ydir;
        }

        bgsquares.arr[this.y][this.x].hasTile = true;

        //some math to make work with 0-4 cords
        this.screenx = width * (.125 + 2 * (.125 * this.x));
        this.screeny = height * (.125 + 2 * (.125 * this.y));
    }

    draw() {
        fill(200);
        rectMode(CENTER);
        rect(this.screenx, this.screeny, 100, 100, 10);
        
        if (this.val != null) {
            textAlign(CENTER);
            fill(69); //Nice.
            text(`${this.val}`, this.screenx, this.screeny);
        }
    }
}