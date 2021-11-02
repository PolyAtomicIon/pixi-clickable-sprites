export default class Keyboard {
    private key: string;
    private isDown: boolean = false;
    private isUp: boolean = true;
    private pressCallback: Function;
    private releaseCallback: Function;

    constructor(key: string) {
        this.key = key;

        window.addEventListener("keydown", this.downHandler.bind(this), false);
        window.addEventListener("keyup", this.upHandler.bind(this), false);
    }

    public setupEvent(press: Function, release: Function) {
        this.pressCallback = press;
        this.releaseCallback = release;
    }

    private downHandler(event: KeyboardEvent): void {
        event.preventDefault();

        if (event.key !== this.key) return;
        if (this.isUp && this.pressCallback) {
            this.pressCallback();
        }
        this.isDown = true;
        this.isUp = false;
    }

    private upHandler(event: KeyboardEvent): void {
        event.preventDefault();
        
        if (event.key !== this.key) return;
        if (this.isDown && this.releaseCallback) {
            this.releaseCallback();
        }
        this.isDown = false;
        this.isUp = true;
    }
}