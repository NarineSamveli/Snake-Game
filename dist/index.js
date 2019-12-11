/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/classes/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/board.ts":
/*!******************************!*\
  !*** ./src/classes/board.ts ***!
  \******************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
class Board {
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
        var cell = this.snake.cells[this.snake.cells.length - 1];
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
    drawScore(snakeLength) {
        document.getElementById('score-view').textContent =
            'Your score: ' + String(snakeLength * 10);
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


/***/ }),

/***/ "./src/classes/food.ts":
/*!*****************************!*\
  !*** ./src/classes/food.ts ***!
  \*****************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
class Food {
    constructor(snake) {
        this.snake = snake;
        this.createFood(snake);
    }
    createFood(snake) {
        let pos = {
            x: Math.ceil(Math.random() * 30),
            y: Math.ceil(Math.random() * 30)
        };
        this.position = pos;
        for (var i = 1; i < snake.cells.length; i++) {
            var cell = snake.cells[i];
            if (cell.x === pos.x && cell.y === pos.y) {
                this.createFood(snake);
            }
        }
    }
}


/***/ }),

/***/ "./src/classes/main.ts":
/*!*****************************!*\
  !*** ./src/classes/main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _painter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./painter */ "./src/classes/painter.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/classes/board.ts");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake */ "./src/classes/snake.ts");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food */ "./src/classes/food.ts");




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
        let painter = new _painter__WEBPACK_IMPORTED_MODULE_0__["Painter"](this.canvas);
        var snake = new _snake__WEBPACK_IMPORTED_MODULE_2__["Snake"](5, 'green', 'darkgreen');
        var food = new _food__WEBPACK_IMPORTED_MODULE_3__["Food"](snake);
        var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](painter, snake, food, 350, 350, 10);
        board.init();
        board.drawScore(snake.cells.length);
        var gameLoop = setInterval(function () {
            board.init();
            snake.move();
            if (board.checkBoundary()) {
                alert("Game over");
                clearInterval(gameLoop);
            }
            if (board.checkEatFood()) {
                board.deleteFood(food.position);
                food.createFood(snake);
                board.drawSnakeGrow();
                board.drawScore(snake.cells.length);
            }
            if (snake.checkCollision()) {
                alert("Game over");
                clearInterval(gameLoop);
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


/***/ }),

/***/ "./src/classes/painter.ts":
/*!********************************!*\
  !*** ./src/classes/painter.ts ***!
  \********************************/
/*! exports provided: Painter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painter", function() { return Painter; });
class Painter {
    constructor(_canvas) {
        this.canvas = _canvas;
        this.context = _canvas.getContext('2d');
    }
    fillArea(x1, y1, x2, y2, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x1, y1, x2, y2);
    }
    strokeArea(x1, y1, x2, y2, color) {
        this.context.strokeStyle = color;
        this.context.strokeRect(x1, y1, x2, y2);
    }
}


/***/ }),

/***/ "./src/classes/snake.ts":
/*!******************************!*\
  !*** ./src/classes/snake.ts ***!
  \******************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _enums_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/direction */ "./src/enums/direction.ts");

class Snake {
    constructor(_length, _bodyColor, _borderColor) {
        this.cells = [];
        this.length = _length;
        this.bodyColor = _bodyColor;
        this.borderColor = _borderColor;
        this.direction = _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down;
        for (let i = 0; i < _length; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    }
    changeDirection(keyCode) {
        switch (keyCode) {
            case 37:
                if (this.direction != _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right) {
                    this.direction = _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Left;
                }
                break;
            case 39:
                if (this.direction != _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Left) {
                    this.direction = _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right;
                }
                break;
            case 38:
                if (this.direction != _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down) {
                    this.direction = _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Up;
                }
                break;
            case 40:
                if (this.direction != _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Up) {
                    this.direction = _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down;
                }
                break;
        }
    }
    move() {
        let snakeX = this.cells[0].x;
        let snakeY = this.cells[0].y;
        if (this.direction == _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right) {
            snakeX++;
        }
        else if (this.direction == _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Left) {
            snakeX--;
        }
        else if (this.direction == _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Up) {
            snakeY--;
        }
        else if (this.direction == _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down) {
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


/***/ }),

/***/ "./src/enums/direction.ts":
/*!********************************!*\
  !*** ./src/enums/direction.ts ***!
  \********************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZm9vZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3BhaW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvc25ha2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudW1zL2RpcmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFBTyxNQUFNLEtBQUs7SUFPZCxZQUFZLE9BQWlCLEVBQUMsS0FBYSxFQUFFLElBQVcsRUFBQyxDQUFRLEVBQUUsQ0FBUSxFQUFFLENBQVE7UUFDakYsSUFBSSxDQUFDLE1BQU0s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QUM7U0FDaEI7SUFDTCxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQWM7UUFDbEIsSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM5RkQ7QUFBQTtBQUFBLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNqQixxQ0FBRTtJQUNGLHlDQUFJO0lBQ0oseUNBQUk7SUFDSiwyQ0FBSztBQUNULENBQUMsRUFMVyxTQUFTLEtBQVQsU0FBUyxRQUtwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NsYXNzZXMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7SVBhaW50ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMvaXBhaW50ZXInO1xuaW1wb3J0IHtJRm9vZH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pZm9vZCc7XG5pbXBvcnQge0lTbmFrZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pc25ha2UnO1xuaW1wb3J0IHtJQm9hcmR9IGZyb20gJy4uL2ludGVyZmFjZXMvaWJvYXJkJztcbmltcG9ydCB7SVBvc2l0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwb3NpdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCBpbXBsZW1lbnRzIElCb2FyZHtcbiAgICBwYWludGVyOiBJUGFpbnRlcjtcbiAgICBzbmFrZTogSVNuYWtlO1xuICAgIGhlaWdodDpudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZm9vZDogSUZvb2Q7XG4gICAgY29uc3RydWN0b3IocGFpbnRlcjogSVBhaW50ZXIsc25ha2U6IElTbmFrZSwgZm9vZDogSUZvb2QsaDpudW1iZXIsIHc6bnVtYmVyLCBzOm51bWJlcil7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHc7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHM7XG4gICAgICAgIHRoaXMucGFpbnRlciA9IHBhaW50ZXI7XG4gICAgICAgIHRoaXMuc25ha2UgPSBzbmFrZTtcbiAgICAgICAgdGhpcy5mb29kID0gZm9vZDtcbiAgICB9XG4gICAgZHJhd1NuYWtlKCk6dm9pZHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2VsbCA9IHRoaXMuc25ha2UuY2VsbHNbaV07XG4gICAgICAgICAgICBpZihpPT0wKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTbmFrZUNlbGwoY2VsbC54LCBjZWxsLnksIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTbmFrZUNlbGwoY2VsbC54LCBjZWxsLnksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3U25ha2VDZWxsKHg6bnVtYmVyLCB5Om51bWJlciwgaXNIZWFkOmJvb2xlYW4pOiB2b2lke1xuICAgICAgICBpZihpc0hlYWQpe1xuICAgICAgICAgICAgdGhpcy5wYWludGVyLmZpbGxBcmVhKHgqdGhpcy5zaXplLCB5KnRoaXMuc2l6ZSwgdGhpcy5zaXplLCB0aGlzLnNpemUsIFwicmVkXCIpO1xuICAgICAgICAgICAgdGhpcy5wYWludGVyLnN0cm9rZUFyZWEoeCp0aGlzLnNpemUsIHkqdGhpcy5zaXplLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgXCJkYXJrZ3JlZW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhaW50ZXIuZmlsbEFyZWEoeCp0aGlzLnNpemUsIHkqdGhpcy5zaXplLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgXCJncmVlblwiKTtcbiAgICAgICAgICAgIHRoaXMucGFpbnRlci5zdHJva2VBcmVhKHgqdGhpcy5zaXplLCB5KnRoaXMuc2l6ZSwgdGhpcy5zaXplLCB0aGlzLnNpemUsIFwiZGFya2dyZWVuXCIpO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIGRyYXdTbmFrZUdyb3coKTogdm9pZHtcbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLnNuYWtlLmNlbGxzW3RoaXMuc25ha2UuY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMuc25ha2UuY2VsbHMucHVzaCh7eDogY2VsbC54LCB5OiBjZWxsLnl9KTtcbiAgICB9XG5cbiAgICBkcmF3Rm9vZCgpOnZvaWR7XG4gICAgICAgIHRoaXMucGFpbnRlci5maWxsQXJlYSh0aGlzLmZvb2QucG9zaXRpb24ueCp0aGlzLnNpemUsIHRoaXMuZm9vZC5wb3NpdGlvbi55KnRoaXMuc2l6ZSwgdGhpcy5zaXplLCB0aGlzLnNpemUsIFwicGlua1wiKTtcbiAgICAgICAgdGhpcy5wYWludGVyLnN0cm9rZUFyZWEodGhpcy5mb29kLnBvc2l0aW9uLngqdGhpcy5zaXplLCB0aGlzLmZvb2QucG9zaXRpb24ueSp0aGlzLnNpemUsIHRoaXMuc2l6ZSwgdGhpcy5zaXplLCBcInllbGxvd1wiKTtcbiAgICB9XG5cbiAgICBkZWxldGVGb29kKGZvb2Q6SVBvc2l0aW9uKTp2b2lke1xuICAgICAgICB0aGlzLnBhaW50ZXIuZmlsbEFyZWEoZm9vZC54KnRoaXMuc2l6ZSwgZm9vZC55KnRoaXMuc2l6ZSwgXG4gICAgICAgICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgXCJsaWdodGdyZXlcIik7XG4gICAgICAgIHRoaXMucGFpbnRlci5zdHJva2VBcmVhKGZvb2QueCp0aGlzLnNpemUsIGZvb2QueSp0aGlzLnNpemUsIFxuICAgICAgICAgICAgdGhpcy5zaXplLCB0aGlzLnNpemUsIFwibGlnaHRncmV5XCIpO1xuICAgIH1cblxuICAgIGRyYXdTY29yZShzbmFrZUxlbmd0aDogbnVtYmVyKTogdm9pZHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXZpZXcnKS50ZXh0Q29udGVudCA9IFxuICAgICAgICAgICAgJ1lvdXIgc2NvcmU6ICcgKyBTdHJpbmcoc25ha2VMZW5ndGggKiAxMCk7XG4gICAgfVxuXG4gICAgY2hlY2tCb3VuZGFyeSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5zbmFrZS5jaGVja0JvdW5kYXJ5KC0xLCAgdGhpcy53aWR0aC90aGlzLnNpemUsLTEsIHRoaXMuaGVpZ2h0L3RoaXMuc2l6ZSk7XG4gICAgfVxuXG4gICAgY2hlY2tFYXRGb29kKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLnNuYWtlLmVhdEZvb2QodGhpcy5mb29kLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpbml0KCk6dm9pZHtcbiAgICAgICAgdGhpcy5wYWludGVyLmZpbGxBcmVhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBcImxpZ2h0Z3JleVwiKVxuICAgICAgICB0aGlzLnBhaW50ZXIuc3Ryb2tlQXJlYSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcImJsYWNrXCIpXG4gICAgfVxufSIsIlxuaW1wb3J0IHtJUG9zaXRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvaXBvc2l0aW9uJztcbmltcG9ydCB7SUZvb2R9IGZyb20gJy4uL2ludGVyZmFjZXMvaWZvb2QnO1xuaW1wb3J0IHtJU25ha2V9IGZyb20gJy4uL2ludGVyZmFjZXMvaXNuYWtlJztcblxuXG5leHBvcnQgY2xhc3MgRm9vZCBpbXBsZW1lbnRzIElGb29ke1xuICAgIHBvc2l0aW9uOiBJUG9zaXRpb247XG4gICAgc25ha2U6IElTbmFrZTtcbiAgICBjb25zdHJ1Y3RvcihzbmFrZTogSVNuYWtlKXtcbiAgICAgICAgdGhpcy5zbmFrZSA9IHNuYWtlO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvb2Qoc25ha2UpO1xuICAgIH1cbiAgICBjcmVhdGVGb29kKHNuYWtlOiBJU25ha2UpOnZvaWR7XG4gICAgICAgIGxldCBwb3MgPSB7XG4gICAgICAgICAgICB4Ok1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjMwKSxcbiAgICAgICAgICAgIHk6TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMzApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IHNuYWtlLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2VsbCA9IHNuYWtlLmNlbGxzW2ldO1xuICAgICAgICAgICAgaWYoY2VsbC54ID09PSBwb3MueCAmJiBjZWxsLnkgPT09IHBvcy55KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvb2Qoc25ha2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UGFpbnRlcn0gZnJvbSAnLi9wYWludGVyJztcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHtTbmFrZX0gZnJvbSAnLi9zbmFrZSc7XG5pbXBvcnQge0Zvb2R9IGZyb20gXCIuL2Zvb2RcIjtcblxuXG5jbGFzcyBNYWluIHtcbiAgICBnYW1lTG9vcDphbnk7XG4gICAgY2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXljYW52YXMnKTtcbiAgICBzdGFydEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJyk7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICBsZXQgcGFpbnRlciA9IG5ldyBQYWludGVyKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdmFyIHNuYWtlID0gbmV3IFNuYWtlKDUsICdncmVlbicsICdkYXJrZ3JlZW4nKTtcbiAgICAgICAgdmFyIGZvb2QgPSBuZXcgRm9vZChzbmFrZSk7XG4gICAgICAgIHZhciBib2FyZCA9IG5ldyBCb2FyZChwYWludGVyLCBzbmFrZSwgZm9vZCwgMzUwLCAzNTAsIDEwKTtcbiAgICAgICAgYm9hcmQuaW5pdCgpOyAgICAgICAgXG4gICAgICAgIGJvYXJkLmRyYXdTY29yZShzbmFrZS5jZWxscy5sZW5ndGgpOyBcbiAgICAgICAgICBcbiAgICAgICAgdmFyIGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYm9hcmQuaW5pdCgpO1xuICAgICAgICAgICAgc25ha2UubW92ZSgpO1xuICAgICAgICAgICAgaWYoYm9hcmQuY2hlY2tCb3VuZGFyeSgpKXtcbiAgICAgICAgICAgICAgICBhbGVydChcIkdhbWUgb3ZlclwiKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVMb29wKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGlmKGJvYXJkLmNoZWNrRWF0Rm9vZCgpKXtcbiAgICAgICAgICAgICAgICBib2FyZC5kZWxldGVGb29kKGZvb2QucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGZvb2QuY3JlYXRlRm9vZChzbmFrZSk7XG4gICAgICAgICAgICAgICAgYm9hcmQuZHJhd1NuYWtlR3JvdygpO1xuICAgICAgICAgICAgICAgIGJvYXJkLmRyYXdTY29yZShzbmFrZS5jZWxscy5sZW5ndGgpO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIGlmKHNuYWtlLmNoZWNrQ29sbGlzaW9uKCkpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR2FtZSBvdmVyXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUxvb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleUNvZGU6bnVtYmVyID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgICAgICBzbmFrZS5jaGFuZ2VEaXJlY3Rpb24oa2V5Q29kZSlcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkLmRyYXdTbmFrZSgpO1xuICAgICAgICAgICAgYm9hcmQuZHJhd0Zvb2QoKTtcbiAgICAgICAgfSwgMTUwKVxuICAgIH1cbn1cbm5ldyBNYWluKCk7XG4iLCJpbXBvcnQge0lQYWludGVyfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lwYWludGVyJztcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgaW1wbGVtZW50cyBJUGFpbnRlcntcbiAgICBjYW52YXM6YW55O1xuICAgIGNvbnRleHQ6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihfY2FudmFzOmFueSl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gX2NhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICBmaWxsQXJlYSh4MTpudW1iZXIsIHkxOm51bWJlcix4MjpudW1iZXIsIHkyOm51bWJlciwgY29sb3I6c3RyaW5nKTp2b2lke1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4MSwgeTEseDIsIHkyKTtcblxuICAgIH1cbiAgICBzdHJva2VBcmVhKHgxOm51bWJlciwgeTE6bnVtYmVyLHgyOm51bWJlciwgeTI6bnVtYmVyLCBjb2xvcjpzdHJpbmcpOnZvaWR7XG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCh4MSwgeTEseDIsIHkyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0lQb3NpdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pcG9zaXRpb24nO1xuaW1wb3J0IHtJU25ha2V9IGZyb20gJy4uL2ludGVyZmFjZXMvaXNuYWtlJztcbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICcuLi9lbnVtcy9kaXJlY3Rpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBTbmFrZSBpbXBsZW1lbnRzIElTbmFrZXtcbiAgICBjZWxsczogSVBvc2l0aW9uW107XG4gICAgYm9keUNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IERpcmVjdGlvbjtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihfbGVuZ3RoOm51bWJlciwgX2JvZHlDb2xvcjpzdHJpbmcsIF9ib3JkZXJDb2xvcjogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IF9sZW5ndGg7XG4gICAgICAgIHRoaXMuYm9keUNvbG9yID0gX2JvZHlDb2xvcjtcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IF9ib3JkZXJDb2xvcjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uRG93bjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxfbGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2goe3g6IGksIHk6IDB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbihrZXlDb2RlOm51bWJlcil7XG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT0gRGlyZWN0aW9uLlJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uLkxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT0gRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uUmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPSBEaXJlY3Rpb24uRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5VcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9IERpcmVjdGlvbi5VcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5Eb3duO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKXtcbiAgICAgICAgbGV0IHNuYWtlWDogbnVtYmVyID0gdGhpcy5jZWxsc1swXS54O1xuICAgICAgICBsZXQgc25ha2VZOiBudW1iZXIgPSB0aGlzLmNlbGxzWzBdLnk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IERpcmVjdGlvbi5SaWdodCkge1xuICAgICAgICAgICAgc25ha2VYKys7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkxlZnQpIHtcbiAgICAgICAgICAgIHNuYWtlWC0tO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09IERpcmVjdGlvbi5VcCkge1xuICAgICAgICAgICAgc25ha2VZLS07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT0gRGlyZWN0aW9uLkRvd24pIHtcbiAgICAgICAgICAgIHNuYWtlWSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jZWxscy5wb3AoKTtcbiAgICAgICAgdGhpcy5jZWxscy51bnNoaWZ0KHt4OnNuYWtlWCwgeTpzbmFrZVl9KTtcbiAgICB9XG4gICAgXG4gICAgY2hlY2tDb2xsaXNpb24oKTogYm9vbGVhbntcbiAgICAgICAgdmFyIHggPSB0aGlzLmNlbGxzWzBdLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy5jZWxsc1swXS55O1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNlbGwgPSB0aGlzLmNlbGxzW2ldO1xuICAgICAgICAgICAgaWYoY2VsbC54ID09PSB4ICYmIGNlbGwueSA9PT0geSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGNoZWNrQm91bmRhcnkoYngxOm51bWJlcixieDI6bnVtYmVyLCBieTE6bnVtYmVyLCBieTI6bnVtYmVyICk6Ym9vbGVhbntcbiAgICAgICAgdmFyIGZpcnN0Q2VsbCA9IHRoaXMuY2VsbHNbMF07XG4gICAgICAgIGlmKGZpcnN0Q2VsbC54ID09IGJ4MSB8fCBmaXJzdENlbGwueSA9PSBieTEgfHwgZmlyc3RDZWxsLnggPT0gYngyIHx8IGZpcnN0Q2VsbC55ID09IGJ5Mil7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlYXRGb29kKGZvb2Q6SVBvc2l0aW9uKTogYm9vbGVhbntcbiAgICAgICAgbGV0IGhlYWQ6SVBvc2l0aW9uID0gdGhpcy5jZWxsc1swXTtcbiAgICAgICAgaWYgKGZvb2QueCA9PSBoZWFkLnggJiYgZm9vZC55ID09IGhlYWQueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcbiAgICBVcCxcbiAgICBEb3duLFxuICAgIExlZnQsXG4gICAgUmlnaHRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=