import { Direction } from '../enums/direction';
export class Snake {
    constructor(_length, _bodyColor, _borderColor) {
        this.cells = [];
        this.length = _length;
        this.bodyColor = _bodyColor;
        this.borderColor = _borderColor;
        this.direction = Direction.Down;
        for (let i = 0; i < _length; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    }
    changeDirection(keyCode) {
        switch (keyCode) {
            case 37:
                if (this.direction != Direction.Right) {
                    this.direction = Direction.Left;
                }
                break;
            case 39:
                if (this.direction != Direction.Left) {
                    this.direction = Direction.Right;
                }
                break;
            case 38:
                if (this.direction != Direction.Down) {
                    this.direction = Direction.Up;
                }
                break;
            case 40:
                if (this.direction != Direction.Up) {
                    this.direction = Direction.Down;
                }
                break;
        }
    }
    move() {
        let snakeX = this.cells[0].x;
        let snakeY = this.cells[0].y;
        if (this.direction == Direction.Right) {
            snakeX++;
        }
        else if (this.direction == Direction.Left) {
            snakeX--;
        }
        else if (this.direction == Direction.Up) {
            snakeY--;
        }
        else if (this.direction == Direction.Down) {
            snakeY++;
        }
        this.cells.pop();
        this.cells.unshift({ x: snakeX, y: snakeY });
    }
    checkCollision() {
        var x = this.cells[0].x;
        var y = this.cells[0].y;
        for (var i = 1; i < this.cells.length; i++) {
            var cell = this.cells[i];
            if (cell.x === x && cell.y === y)
                return true;
        }
        return false;
    }
    checkBoundary(bx1, bx2, by1, by2) {
        var firstCell = this.cells[0];
        if (firstCell.x == bx1 || firstCell.y == by1 || firstCell.x == bx2 || firstCell.y == by2) {
            return true;
        }
        else {
            return false;
        }
    }
    eatFood(food) {
        let head = this.cells[0];
        if (food.x == head.x && food.y == head.y) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=snake.js.map