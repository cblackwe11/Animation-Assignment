class Character {

    constructor(game) {
        this.game = game;
        this.animations = new Map();
        this.loadAnimations();
        this.animator = this.animations.get("idle");
        this.x = 0;
        this.y = 447;
        this.speed = 0;
    };

    loadAnimations() {
        this.animations.set("idle", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Idle_4.png"),
            5, 0, 21.5, 32, 4, 0.3, 10.5));
        this.animations.set("walk", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Walk_6.png"),
            6, 0, 18, 32, 6, 0.1, 14));
        this.animations.set("run", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Run_6.png"),
            6, 0, 20, 32, 6, 0.08, 12));
        this.animations.set("attack", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Attack2_6.png"),
            5, 0, 26.5, 32, 6, 0.1, 5.5, false));
        this.animations.set("jump", new Animator(ASSET_MANAGER.getAsset("./Pink_Monster/Pink_Monster_Jump_8.png"),
            4, 0, 27, 32, 8, 0.1, 5, false, 1));
    };

    update() {
        let targetAnim = this.animations.get("idle");
        let targetSpeed = 0;

        if (this.game.keys["Space"]) {
            targetSpeed = 0;
            targetAnim = this.animations.get("attack");
        }
        else if (this.game.keys["ArrowUp"] || this.game.keys["KeyW"]) {
            targetSpeed = 0;
            targetAnim = this.animations.get("jump");
        }
        else if (this.game.keys["ShiftLeft"]) {
            targetSpeed = 150;
            targetAnim = this.animations.get("run");
        }
        else if (this.game.keys["ArrowRight"] || this.game.keys["KeyD"]) {
            targetSpeed = 100;
            targetAnim = this.animations.get("walk");
        }

        const currentAnim = this.animator;
        const isPriority = (currentAnim === this.animations.get("attack") || currentAnim === this.animations.get("jump"));

        if (isPriority && !currentAnim.isDone()) {
            targetAnim = currentAnim;
            targetSpeed = 0;
        }

        if (this.animator !== targetAnim) {
            this.animator = targetAnim;
            this.animator.elapsedTime = 0;
        }
        else {
            if (isPriority && currentAnim.isDone() && targetAnim === this.animator) {
                this.animator.elapsedTime = 0;
            }
        }

        this.speed = targetSpeed;
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5);
    };
}