export class Food {
    constructor() {
        this.createFood();
    }
    createFood() {
        let pos = {
            x: Math.ceil(Math.random() * 30),
            y: Math.ceil(Math.random() * 30)
        };
        this.position = pos;
    }
}
//# sourceMappingURL=food.js.map