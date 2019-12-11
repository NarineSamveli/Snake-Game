import { Painter } from './painter';
import { Board } from './board';
import { Snake } from './snake';
import { Food } from "./food";
class Main {
    constructor() {
        this.canvas = document.getElementById('mycanvas');
        this.startButton = document.getElementById('start-btn');
        this.startButton.addEventListener('click', () => {
            this.init();
        });
    }
    init() {
        this.startButton.setAttribute('disabled', 'true');
        let painter = new Painter(this.canvas);
        var snake = new Snake(5, 'green', 'darkgreen');
        var food = new Food();
        var board = new Board(painter, snake, food, 350, 350, 10);
        board.init();
        this.gameLoop = setInterval(function () {
            board.init();
            snake.move();
            if (board.checkBoundary()) {
                this.gameLoop = clearInterval(this.gameLoop);
                alert("Game over");
            }
            if (board.checkEatFood()) {
                board.deleteFood(food.position);
                board.food.createFood();
                board.drawSnakeGrow();
            }
            if (board.snake.checkCollision()) {
                this.gameLoop = clearInterval(this.gameLoop);
                alert("Game over");
            }
            document.onkeydown = function (event) {
                let keyCode = event.keyCode;
                snake.changeDirection(keyCode);
            };
            board.drawSnake();
            board.drawFood();
        }, 150);
    }
}
new Main();
//# sourceMappingURL=main.js.map