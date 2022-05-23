import { start } from "repl";
import { Actor } from "./Actor";
import { timer } from "./utils/Timer";
//  let Go = addEventListener(KeyboardEvent,timer(), true);
export class Crono extends Actor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(timer(), this.position.x, this.position.y);
  }
  keyboard_event_down(key: string): void {
    if ("ArrowUp") {
      return;
    }
  }
}
