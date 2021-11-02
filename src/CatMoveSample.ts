import * as PIXI from "pixi.js";
import Keyboard from "./Keyboard";

export default class CatMoveSample {
    private app: PIXI.Application;

    private up: Keyboard;
    private down: Keyboard;
    private left: Keyboard;
    private right: Keyboard;

    private velocity = { vx: 0, vy: 0 };

    constructor(app: PIXI.Application) {
        this.app = app;
        this.setupKeyboardEvent();
    }

    public start(): void {
        PIXI.Loader.shared
            .add("icon/cat.png")
            .load(this.setup.bind(this));
    }

    private setup(): void {
        let cat = new PIXI.Sprite(PIXI.utils.TextureCache["icon/cat.png"]);
        this.app.stage.addChild(cat);
    
        this.app.ticker.add(delta => {
            cat.x += 1 * this.velocity.vx * delta;
            cat.y += 1 * this.velocity.vy * delta;
        });
    }

    private setupKeyboardEvent(): void {
        this.up = new Keyboard("ArrowUp");
        this.down = new Keyboard("ArrowDown");
        this.left = new Keyboard("ArrowLeft");
        this.right = new Keyboard("ArrowRight");

        this.up.setupEvent(this.refreshVelocity.bind(this, 0, -1), this.refreshVelocity.bind(this, 0, 1));
        this.down.setupEvent(this.refreshVelocity.bind(this, 0, 1), this.refreshVelocity.bind(this, 0, -1));
        this.left.setupEvent(this.refreshVelocity.bind(this, -1, 0), this.refreshVelocity.bind(this, 1, 0));
        this.right.setupEvent(this.refreshVelocity.bind(this, 1, 0), this.refreshVelocity.bind(this, -1, 0));
    }
    
    private refreshVelocity(vx: number, vy: number): void {
        this.velocity.vx += vx;
        this.velocity.vy += vy;
    }
}