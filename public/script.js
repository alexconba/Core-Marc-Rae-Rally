window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let actors = [new Map({ x: 0, y: 0 }), new FPSViewer({ x: 5, y: 100 })];

  // requestAnimationFrame
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => {
      e.update(delta);
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
      e.draw(delta, ctx);
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener("keydown", (e) => {
    actors.forEach((actor) => {
      actor.keyboard_event(e.key);
    });
  });
};
