import {IPainter} from '../interfaces/ipainter';
import {IFood} from '../interfaces/ifood';
import {ISnake} from '../interfaces/isnake';
import {IBoard} from '../interfaces/iboard';
import {IPosition} from '../interfaces/iposition';

export class Board implements IBoard{
    painter: IPainter;
    snake: ISnake;
    height:number;
    width: number;
    size: number;
    food: IFood;
    constructor(painter: IPainter,snake: ISnake, food: IFood,h:number, w:number, s:number){
        this.height = h;
        this.width = w;
        this.size = s;
        this.painter = painter;
        this.snake = snake;
        this.food = food;
    }
    drawSnake():void{
        for (var i = 0; i < this.snake.cells.length; i++) {
            var cell = this.snake.cells[i];
            if(i==0){
                this.drawSnakeCell(cell.x, cell.y, true);
            } else {
                this.drawSnakeCell(cell.x, cell.y, false);
            }
        }
    }
    drawSnakeCell(x:number, y:number, isHead:boolean): void{
        if(isHead){
            this.painter.fillArea(x*this.size, y*this.size, this.size, this.size, "red");
            this.painter.strokeArea(x*this.size, y*this.size, this.size, this.size, "darkgreen");
        } else {
            this.painter.fillArea(x*this.size, y*this.size, this.size, this.size, "green");
            this.painter.strokeArea(x*this.size, y*this.size, this.size, this.size, "darkgreen");
        }
    }
 
    drawSnakeGrow(): void{
        var cell = this.snake.cells[this.snake.cells.length - 1];
        this.snake.cells.push({x: cell.x, y: cell.y});
    }

    drawFood():void{
        this.painter.fillArea(this.food.position.x*this.size, this.food.position.y*this.size, this.size, this.size, "pink");
        this.painter.strokeArea(this.food.position.x*this.size, this.food.position.y*this.size, this.size, this.size, "yellow");
    }

    deleteFood(food:IPosition):void{
        this.painter.fillArea(food.x*this.size, food.y*this.size, 
            this.size, this.size, "lightgrey");
        this.painter.strokeArea(food.x*this.size, food.y*this.size, 
            this.size, this.size, "lightgrey");
    }

    drawScore(snakeLength: number): void{
        document.getElementById('score-view').textContent = 
            'Your score: ' + String(snakeLength * 10);
    }

    checkBoundary(): boolean{
        return this.snake.checkBoundary(-1,  this.width/this.size,-1, this.height/this.size);
    }

    checkEatFood(): boolean{
        return this.snake.eatFood(this.food.position);
    }

    init():void{
        this.painter.fillArea(0, 0, this.width, this.height, "lightgrey")
        this.painter.strokeArea(0, 0, this.width, this.height,"black")
    }
}