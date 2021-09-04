class Box {
    constructor(x, y, bgsquares) {
        this.x = x;
        this.y = y;
        //some math to make work with 0-4 cords
        this.screenx = width * (.125 + 2 * (.125 * this.x));
        this.screeny = height * (.125 + 2 * (.125 * this.y));
        this.val = null;
        bgsquares.arr[y][x].hasBox = true;
    }

    updateCords(xdir, ydir, bgsquares) {
        let oldx = this.x;
        let oldy = this.y;
       
        if (bgsquares.arr[oldy + ydir][oldx + xdir].hasBox) {
            console.log("beep");
        } else {
            this.x += xdir;
            this.y += ydir;
            bgsquares.arr[oldy][oldx].hasBox = false;
        }

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > 3) {
            this.x = 3;
        }
        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > 3) {
            this.y = 3;
        }

        bgsquares.arr[this.y][this.x].hasBox = true;

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