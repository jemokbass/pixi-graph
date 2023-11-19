import { Graphics } from "pixi.js";

type Position = { x: number; y: number };

export class PaintShape extends Graphics {
  private lineWidth = 5;
  private lineColor = "#ffffff";
  private radius = 5;

  paintLine(from: Position, to: Position) {
    this.lineStyle(this.lineWidth, this.lineColor);
    this.moveTo(from.x, from.y);
    this.lineTo(to.x, to.y);
  }

  paintPoint(x: number, y: number) {
    this.beginFill(this.lineColor);
    this.drawCircle(x, y, this.radius);
  }
}
