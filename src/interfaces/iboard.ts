import {IPainter} from '../interfaces/ipainter';
import {IFood} from '../interfaces/ifood';
import {IBoard} from '../interfaces/iboard';
import {IPosition} from '../interfaces/iposition';

export interface IBoard {
    painter: IPainter,
    height:number,
    width: number,
    size:number,
    food: IFood,
    drawSnake():void,
    drawSnakeCell(x:number, y:number, isHead:boolean): void,
    drawSnakeGrow(): void,
    drawFood(food: any):void,
    deleteFood(food:IPosition):void,
    drawScore(snakeLength: number):void,
    init():void,
    checkBoundary(): boolean,
    checkEatFood(): boolean;
}