class Text {
    constructor(game) {
        Object.assign(this, {game});
        this.x = 500;
        this.y = 350;
    }

    update() {

    }

    draw(ctx) {
        ctx.font = "22px 'Delius'";
        ctx.save();
        ctx.fillStyle = "rgba(51, 51, 51, 0.7)";
        ctx.fillRect(650, 50, 300, 190);
        ctx.restore();
        ctx.lineWidth = 5;
        ctx.strokeRect(650, 50, 300, 190);
        ctx.fillStyle = "white";
        ctx.fillText("Press/hold SPACE to attack", 660, 80);
        ctx.fillText("Press/hold \u2191 to jump", 660, 130);
        ctx.fillText("Hold D or \u2192 to walk", 660, 180);
        ctx.fillText("Hold SHIFT to run", 660, 230);

        ctx.fillStyle = "white";
    }
}