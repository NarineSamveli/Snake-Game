
import {IPosition} from '../interfaces/iposition';
import {IFood} from '../interfaces/ifood';
import {ISnake} from '../interfaces/isnake';


export class Food implements IFood{
    position: IPosition;
    snake: ISnake;
    constructor(snake: ISnake){
        this.snake = snake;
        this.createFood(snake);
    }
    createFood(snake: ISnake):void{
        let pos = {
            x:Math.ceil(Math.random()*30),
            y:Math.ceil(Math.random()*30)
        }
        this.position = pos;
        for(var i = 1; i < snake.cells.length; i++) {
            var cell = snake.cells[i];
            if(cell.x === pos.x && cell.y === pos.y){
                this.createFood(snake);
            }
        }
    }
}