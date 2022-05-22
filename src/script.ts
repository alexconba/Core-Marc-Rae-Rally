import { Pacman } from "./Pacman";
import { Map } from "./Map";
import { FPSViewer } from "./fpsViewer";
import { Actor } from "./Actor";
import { Car } from "./car";
import { Crono } from "./crono";
import { Barrier } from "./Barrier";

window.onload = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  let actors: Actor[] = [
    new Map({ x: 0, y: 0 }),
    // new Pacman({ x: 200, y: 200 }, 'yellow', 1000),
    // new Pacman({ x: 200, y: 400 }, 'pink'),
    new FPSViewer({ x: 5, y: 50 }),
    new Crono({ x: 1400, y: 50 }),
    new Car({ x: 1020, y: 800 }),
  ];
  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => {
      e.update(delta);
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
      ctx.save();
      e.draw(delta, ctx);
      ctx.restore();
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener("keydown", (e) => {
    // console.log("Keydown", e);
    actors.forEach((actor) => {
      actor.keyboard_event_down(e.key);
    });
  });

  document.body.addEventListener("keyup", (e) => {
    // console.log("keyUp", e);
    actors.forEach((actor) => {
      actor.keyboard_event_up(e.key);
    });
  });
};
