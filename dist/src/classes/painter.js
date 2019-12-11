export class Painter {
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
//# sourceMappingURL=painter.js.map