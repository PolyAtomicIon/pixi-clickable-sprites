import * as PIXI from "pixi.js";
import DungeonSample from "./DungeonSample";

const app = new PIXI.Application({
    width: 512,
    height: 512,
    antialias: true,
    backgroundAlpha: 1,
    resolution: 1
});
document.body.appendChild(app.view);

let dungeon = new DungeonSample(app);
dungeon.start();