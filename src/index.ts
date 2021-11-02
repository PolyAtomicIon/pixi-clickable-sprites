import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    width: 512,
    height: 512,
    antialias: true,
    backgroundAlpha: 1,
    resolution: 1
});
document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("icon/47_avatar_big.jpg")
    .add("icon/tileset.png")
    .add("icon/treasureHunter.json")
    .load(setup);

let dungeon, explorer, treasure, id;
function setup() {
    // normal
    // const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["icon/47_avatar_big.jpg"].texture);

    // sprite.position.set(128, 128);
    // sprite.scale.set(0.5, 0.5);
    // sprite.anchor.set(0.5, 0.5);
    // //sprite.pivot.set(100, 100);
    // sprite.rotation = 0.5;

    // app.stage.addChild(sprite);

    // tileset
    // const texture = PIXI.utils.TextureCache["icon/tileset.png"];
    // const rectangle = new PIXI.Rectangle(192, 128, 64, 64);
    // texture.frame = rectangle;
    // const rocket = new PIXI.Sprite(texture);
    // rocket.position.set(32, 32);
    // app.stage.addChild(rocket);
    // app.renderer.render(app.stage);

    // atlas
    let dungeonTexture = PIXI.utils.TextureCache["dungeon.png"];
    dungeon = new PIXI.Sprite(dungeonTexture);
    app.stage.addChild(dungeon);

    explorer = new PIXI.Sprite(PIXI.Loader.shared.resources["icon/treasureHunter.json"].textures["explorer.png"]);
    explorer.x = 68;

    explorer.y = app.stage.height / 2 - explorer.height / 2;
    app.stage.addChild(explorer);

    id = PIXI.Loader.shared.resources["icon/treasureHunter.json"].textures;

    treasure = new PIXI.Sprite(id["treasure.png"]);

    treasure.x = app.stage.width - treasure.width - 48;
    treasure.y = app.stage.height / 2 - treasure.height / 2;
    app.stage.addChild(treasure);
}