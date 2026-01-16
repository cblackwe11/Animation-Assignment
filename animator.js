class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding });
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        const frame = this.currentFrame();
        if (this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime;
        }
        ctx.drawImage(this.spritesheet, this.xStart + frame * (this.width + this.framePadding), this.yStart, this.width, this.height, x, y, this.width, this.height);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime/this.frameDuration);
    };

    isDone() {
        return this.elapsedTime >= this.totalTime;
    };
}