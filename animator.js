class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration,
                framePadding, loop = true, xOffset = 0) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, loop, xOffset});
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            } else {}
        }

        let frame = this.currentFrame();

        if (!this.loop && frame >= this.frameCount) {
            frame = 0;
        }

        ctx.drawImage(this.spritesheet, this.xStart + frame * (this.width + this.framePadding),
            this.yStart, this.width, this.height, x - (this.xOffset * scale), y, this.width * scale, this.height * scale);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime/this.frameDuration);
    };

    isDone() {
        return this.elapsedTime >= this.totalTime;
    };
}