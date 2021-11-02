import * as PIXI from "pixi.js";

export default class DungeonSample {
    private app: PIXI.Application;

    constructor(app: PIXI.Application) {
        this.app = app;
    }

    public start(): void {
        PIXI.Loader.shared
            .add("icon/47_avatar_big.jpg")
            .add("icon/tileset.png")
            .add("icon/treasureHunter.json")
            .load(this.setup.bind(this));
    }

    private setup(): void {
        let objectList: PIXI.Sprite[] = [];
        this.setupDungeon();
        this.setupExplorer(objectList);
        this.setupTreasure(objectList);
        this.setupDoor();
    
        let dungeonWidth = this.app.view.width - 96;
        let dungeonHeight = this.app.view.height - 88;
        let enemyTexture = PIXI.utils.TextureCache["blob.png"];
        for (let i = 0; i < 6; ++i) {
            let enemy = new PIXI.Sprite(enemyTexture);
    
            do {
                let x = Math.random() * dungeonWidth + 32;
                let y = Math.random() * dungeonHeight + 32;
                enemy.position.set(x, y);
            } while (this.testGroupAABB(objectList, enemy));
            
            objectList.push(enemy);
            this.app.stage.addChild(enemy);
        }
    }
    
    private setupDungeon(): void {
        let dungeonTexture = PIXI.utils.TextureCache["dungeon.png"];
        let dungeon = new PIXI.Sprite(dungeonTexture);
        this.app.stage.addChild(dungeon);
    }
    
    private setupExplorer(list: PIXI.Sprite[]): void {
        let explorer = new PIXI.Sprite(PIXI.Loader.shared.resources["icon/treasureHunter.json"].textures["explorer.png"]);
    
        explorer.x = 68;
        explorer.y = this.app.stage.height / 2 - explorer.height / 2;
    
        list.push(explorer);
        this.app.stage.addChild(explorer);
    }
    
    private setupTreasure(list: PIXI.Sprite[]): void {
        let id = PIXI.Loader.shared.resources["icon/treasureHunter.json"].textures;
        let treasure = new PIXI.Sprite(id["treasure.png"]);
    
        treasure.x = this.app.stage.width - treasure.width - 48;
        treasure.y = this.app.stage.height / 2 - treasure.height / 2;
    
        list.push(treasure);
        this.app.stage.addChild(treasure);
    }
    
    private setupDoor(): void {
        let doorTexture = PIXI.utils.TextureCache["door.png"]
        let door = new PIXI.Sprite(doorTexture);
    
        door.position.set(32, 0);
    
        this.app.stage.addChild(door);
    }
    
    private testGroupAABB(list: PIXI.Sprite[], target: PIXI.Sprite): boolean {
        return list.some(obj => {
            return this.testForAABB(obj, target);
        });
    }
    
    private testForAABB(object1: PIXI.Sprite, object2: PIXI.Sprite): boolean {
        const bounds1 = object1.getBounds();
        const bounds2 = object2.getBounds();
    
        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}