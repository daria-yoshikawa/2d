export const drawGraph = (point: Array<number[]>, ctx: any) => {
  ctx.font = "12px Segoe UI";
  ctx.strokeStyle = "#212121";
  const N = 500;
  const step = 500 / 10;
  for (let i = 0; i < 499; i++) {
    ctx.beginPath();

    if (Math.sign(point[i][0])) {
      if (Math.sign(point[i][1]))
        ctx.fillRect(
          N / 2 + point[i][0] * step,
          N / 2 - point[i][1] * step,
          2,
          2
        );
      else
        ctx.fillRect(
          N / 2 + point[i][0] * step,
          N / 2 + point[i][1] * step,
          2,
          2
        );
    }

    if (!Math.sign(point[i][0])) {
      if (Math.sign(point[i][1]))
        ctx.fillRect(
          N / 2 - point[i][0] * step,
          N / 2 + point[i][1] * step,
          2,
          2
        );
      else
        ctx.fillRect(
          N / 2 - point[i][0] * step,
          N / 2 - point[i][1] * step,
          2,
          2
        );
    }

    ctx.stroke();
  }
};
