import * as PIXI from "pixi.js";
import DungeonSample from "./DungeonSample";

const app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    backgroundAlpha: 1,
    resolution: 1
});
document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("icon/cat.png")
    .load(setup);

function setup() {
    let cat = new PIXI.Sprite(PIXI.utils.TextureCache["icon/cat.png"]);
    app.stage.addChild(cat);

    let velocity = { vx: 1, vy: 1 };

    app.ticker.add(delta => {
        cat.x += 1 * velocity.vx * delta;
        cat.y += 1 * velocity.vy * delta;
    });
}

// sample1
// let dungeon = new DungeonSample(app);
// dungeon.start();