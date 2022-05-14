import { Actor } from "./Actor";
import { Point } from "./types/Point";
import { converAngleToRad } from "./utils/angleToRad";

export class Pacman extends Actor {
  pacmanSize: number;
  mouthOpen: number;
  origin: Point;
  color: string;
  maxSpeed: number;
  speed: Point;
  constructor(initialPos: Point, color = "yellow", maxSpeed = 100) {
    super(initialPos);
    this.pacmanSize = 40;
    this.mouthOpen = 30;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: 0 };
  }

  // add delta to update
  update(delta: number) {
    this.mouthOpen += 0.8;
    // speed * delta
    let newPosX = this.origin.x + this.speed.x * delta;
    if (newPosX <= 1024 - this.pacmanSize && newPosX >= this.pacmanSize) {
      this.origin.x = newPosX;
    }
  }

  //add delta to draw
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    let origin = this.origin;
    let mouthOpen = this.mouthOpen;
    // mouthOpen * delta
    let open = 20 * Math.sin(10 * mouthOpen * delta) + 20;

    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }
    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.arc(
      origin.x,
      origin.y,
      this.pacmanSize,
      converAngleToRad(-open + direction),
      converAngleToRad(open + direction),
      true
    );
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  keyboard_event_down(key: string) {
    switch (key) {
      case "ArrowRight":
        console.log("right");
        this.speed.x = this.maxSpeed;
        break;
      case "ArrowLeft":
        console.log("left");
        this.speed.x = -this.maxSpeed;
        break;
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowDown":
        console.log("down");
        break;
      default:
        console.log("not a valid key");
        break;
    }
  }
}
