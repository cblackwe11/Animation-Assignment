class Character {

    constructor(game) {
        this.game = game;
        this.animations = new Map();
        this.loadAnimations();
        this.animator = this.animations.get("jump");
        this.x = 25;
        this.y = 25;
        this.speed = 150;
    };

    loadAnimations() {
        this.animations.set("idle", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Idle_4.png"),
            6, 3, 21, 29, 4, 0.3, 10.5));
        this.animations.set("walk", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Walk_6.png"),
            6, 3, 18, 29, 6, 0.1, 14));
        this.animations.set("run", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Run_6.png"),
            6, 3, 20, 29, 6, 0.08, 12));
        this.animations.set("attack", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Attack2_6.png"),
            6, 3, 26, 29, 6, 0.1, 6));
        this.animations.set("jump", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Jump_8.png"),
            4, 0, 27, 32, 8, 0.2, 5));
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024) {
            this.x = 0;
        }
    };

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 6);
    };
}