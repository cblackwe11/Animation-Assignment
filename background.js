class Background {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./Background/bg.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 260, 0, 1747, 1000, 0, -100, 1397.6 , 800);
    };
}

class Cloud {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./Background/cloud.png");
    };

    update() {

    };

    draw(ctx) {
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.spritesheet, 0, 0, 68, 48, 30, -50, 250, 176.47);
        ctx.drawImage(this.spritesheet, 0, 0, 68, 48, 300, 0, 300, 211.76);
        ctx.drawImage(this.spritesheet, 0, 0, 68, 48, 650, -40, 250, 176.47);
    };
}

