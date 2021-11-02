import * as PIXI from "pixi.js";
import DungeonSample from "./DungeonSample";
import CatMoveSample from "./CatMoveSample";

const app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    backgroundAlpha: 1,
    resolution: 1
});
document.body.appendChild(app.view);

// sample1
// let dungeon = new DungeonSample(app);
// dungeon.start();

// sample2
let catMove = new CatMoveSample(app);
catMove.start();