import { Actor } from "./Actor";
import { Point } from "./types/Point";
import { converAngleToRad } from "./utils/angleToRad";
import { checkLimits } from "./utils/checkLimits";
import { checkAngle } from "./utils/angleLimit";
import { Map } from "./Map";
import imageA from "./sprites/carros.png";
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
  carImage: HTMLImageElement;
  constructor(initialPos: Point, size: Size = { w: 300, h: 190 }) {
    super(initialPos);
    this.carSize = size;
    this.carColor = "red";
    this.angle = 0;
    this.angleSpeed = 0;
    this.carSpeed = 0;
    this.carAcceleration = 0;
    this.carImage = new Image();
    this.carImage.src = imageA;
  }

  update(delta: number): void {
    // console.log(this.angle);
    let newangle = this.angle + this.angleSpeed;
    if (checkAngle(newangle)) {
      this.angle = newangle;
    }
    // console.log(newangle);
    this.angleSpeed *= 0.9;
    this.carSpeed = this.carSpeed * 0.9 + this.carAcceleration;

    let newpos = this.position.x + this.carSpeed;
    this.position.x = newpos;
    // console.log(newpos);
    const horizonLimits = (newPosition: number) => {
      if (newpos + 32 >= 1990 || newpos <= 122) {
        // this.position.x = newPosition;
        console.log(this.carSpeed);
        return (this.carSpeed = 0);
      }
    };
    let newPosition = this.position.x + this.carSpeed * delta;
    horizonLimits(newPosition);
  }
  draw(delta: number, ctx: CanvasRenderingContext2D): void {
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(converAngleToRad(this.angle));
    // ctx.fillStyle = this.carColor;
    ctx.drawImage(
      this.carImage,
      176,
      150,
      32,
      72,
      -this.carSize.h / 2,
      -this.carSize.w / 2,
      this.carSize.h,
      this.carSize.w
    );
  }
  keyboard_event_down(key: string): void {
    if (key === "ArrowLeft") {
      this.angleSpeed -= 4;
      this.carAcceleration = -0.5;
    } else if (key === "ArrowRight") {
      this.angleSpeed += 4;
      this.carAcceleration = 0.5;
    }
  }
  keyboard_event_up(key: string): void {
    if (key === "ArrowLeft") {
      this.carAcceleration = 0;
    } else if (key === "ArrowRight") {
      this.carAcceleration = 0;
    }
  }
}
