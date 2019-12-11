import {Painter} from './painter';
import {Board} from './board';
import {Snake} from './snake';
import {Food} from "./food";


class Main {
    gameLoop:any;
    canvas: any = document.getElementById('mycanvas');
    startButton: HTMLElement = document.getElementById('start-btn');
    constructor(){
        this.startButton.addEventListener('click', () => {
            this.init();
        });
    }

    init(): void {
        this.startButton.setAttribute('disabled', 'true');
        let painter = new Painter(this.canvas);
        var snake = new Snake(5, 'green', 'darkgreen');
        var food = new Food(snake);
        var board = new Board(painter, snake, food, 350, 350, 10);
        board.init();        
        board.drawScore(snake.cells.length); 
          
        var gameLoop = setInterval(function () {
            board.init();
            snake.move();
            if(board.checkBoundary()){
                alert("Game over");
                clearInterval(gameLoop);
            }   
            if(board.checkEatFood()){
                board.deleteFood(food.position);
                food.createFood(snake);
                board.drawSnakeGrow();
                board.drawScore(snake.cells.length);
            }    
            if(snake.checkCollision()){
                alert("Game over");
                clearInterval(gameLoop);
            }
            document.onkeydown = function (event) {
                let keyCode:number = event.keyCode;
                snake.changeDirection(keyCode)
            }            
            board.drawSnake();
            board.drawFood();
        }, 150)
    }
}
new Main();
