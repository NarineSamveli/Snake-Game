export class Board {
    constructor(painter, snake, food, h, w, s) {
        this.height = h;
        this.width = w;
        this.size = s;
        this.painter = painter;
        this.snake = snake;
        this.food = food;
    }
    drawSnake() {
        for (var i = 0; i < this.snake.cells.length; i++) {
            var cell = this.snake.cells[i];
            if (i == 0) {
                this.drawSnakeCell(cell.x, cell.y, true);
            }
            else {
                this.drawSnakeCell(cell.x, cell.y, false);
            }
        }
    }
    drawSnakeCell(x, y, isHead) {
        if (isHead) {
            this.painter.fillArea(x * this.size, y * this.size, this.size, this.size, "red");
            this.painter.strokeArea(x * this.size, y * this.size, this.size, this.size, "darkgreen");
        }
        else {
            this.painter.fillArea(x * this.size, y * this.size, this.size, this.size, "green");
            this.painter.strokeArea(x * this.size, y * this.size, this.size, this.size, "darkgreen");
        }
    }
    drawSnakeGrow() {
        var ii = this.snake.cells.length - 1;
        var cell = this.snake.cells[ii];
        this.snake.cells.push({ x: cell.x, y: cell.y });
    }
    drawFood() {
        this.painter.fillArea(this.food.position.x * this.size, this.food.position.y * this.size, this.size, this.size, "pink");
        this.painter.strokeArea(this.food.position.x * this.size, this.food.position.y * this.size, this.size, this.size, "yellow");
    }
    deleteFood(food) {
        this.painter.fillArea(food.x * this.size, food.y * this.size, this.size, this.size, "lightgrey");
        this.painter.strokeArea(food.x * this.size, food.y * this.size, this.size, this.size, "lightgrey");
    }
    drawScore() {
    }
    checkBoundary() {
        return this.snake.checkBoundary(-1, this.width / this.size, -1, this.height / this.size);
    }
    checkEatFood() {
        return this.snake.eatFood(this.food.position);
    }
    init() {
        this.painter.fillArea(0, 0, this.width, this.height, "lightgrey");
        this.painter.strokeArea(0, 0, this.width, this.height, "black");
    }
}
//# sourceMappingURL=board.js.map