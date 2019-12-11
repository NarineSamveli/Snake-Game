import {IPosition} from './iposition';
import {ISnake} from '../interfaces/isnake';

export interface IFood{
    position: IPosition,
    createFood(snake: ISnake):void
}

