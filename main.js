const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Background/cloud.png")
ASSET_MANAGER.queueDownload("./Background/bg.png")
ASSET_MANAGER.queueDownload("./Pink_Monster/Pink_Monster_Walk_6.png")
ASSET_MANAGER.queueDownload("./Pink_Monster/Pink_Monster_Idle_4.png")
ASSET_MANAGER.queueDownload("./Pink_Monster/Pink_Monster_Jump_8.png")
ASSET_MANAGER.queueDownload("./Pink_Monster/Pink_Monster_Run_6.png")
ASSET_MANAGER.queueDownload("./Pink_Monster/Pink_Monster_Attack2_6.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new Cloud(gameEngine));
	gameEngine.addEntity(new Character(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.init(ctx);
	gameEngine.start();
});
