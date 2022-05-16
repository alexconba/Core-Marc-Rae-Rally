import { Actor } from "./Actor";
import { Point } from "./types/Point";
import { converAngleToRad } from "./utils/angleToRad";
import { checkLimits } from "./utils/checkLimits";

interface Size {
  w: number;
  h: number;
}

export class Car extends Actor {
  carSize: Size;
  carColor: string;
  angle: number;
  angleSpeed: number;
  carSpeed: number;
  carAcceleration: number;
  constructor(initialPos: Point, size: Size = { w: 50, h: 100 }) {
    super(initialPos);
    this.carSize = size;
    this.carColor = "red";
    this.angle = 0;
    this.angleSpeed = 0;
    this.carSpeed = 0;
    this.carAcceleration = 0;
  }

  update(delta: number): void {
    // console.log(this.angle);
    this.angle += this.angleSpeed;
    this.angleSpeed *= 0.9;
    this.carSpeed = this.carSpeed * 0.9 + this.carAcceleration;
    let newPos: Point = {
      x:
        this.position.x +
        Math.cos(converAngleToRad(this.angle)) * this.carSpeed,
      y:
        this.position.y +
        Math.sin(converAngleToRad(this.angle)) * this.carSpeed,
    };

    if (checkLimits(newPos)) {
      this.position = newPos;
    }
  }
  draw(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(converAngleToRad(this.angle));
    ctx.fillStyle = this.carColor;
    ctx.fillRect(
      -this.carSize.h / 2,
      -this.carSize.w / 2,
      this.carSize.h,
      this.carSize.w
    );
  }
  keyboard_event_down(key: string): void {
    if (key === "ArrowLeft") {
      this.angleSpeed -= 4;
    } else if (key === "ArrowRight") {
      this.angleSpeed += 4;
    }
  }

  keyboard_event_up(key: string): void {
    if (key === "ArrowUp") {
      this.carAcceleration = 0;
    } else if (key === "ArrowDown") {
      this.carAcceleration = 0;
    }
  }
}
