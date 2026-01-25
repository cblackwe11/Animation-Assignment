class Text {
    constructor(game) {
        Object.assign(this, {game});
        this.x = 500;
        this.y = 350;
    }

    update() {

    }

    draw(ctx) {
        // This is called every single frame after the screen is cleared
        ctx.font = "22px Arial";
        ctx.save();
        ctx.fillStyle = "rgba(51, 51, 51, 0.7)";
        //ctx.textAlign = "center";
        //ctx.textBaseline = "middle";
        ctx.fillRect(650, 50, 300, 300);
        ctx.restore();
        ctx.lineWidth = 5;
        ctx.strokeRect(650, 50, 300, 300);
        ctx.fillStyle = "white";
        ctx.fillText("Press/hold SPACE to attack", 660, 80);
        ctx.fillText("Press/hold \u2191 to jump", 660, 110);
        ctx.fillText("Hold D or \u2192 to walk", 660, 140);
        ctx.fillText("Hold SHIFT + D or SHIFT + \u2191 to run", 660, 170);

        ctx.fillStyle = "white";
    }
}