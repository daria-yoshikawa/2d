export const drawLayout = (
  N: number,
  height: number,
  width: number,
  ctx: any
) => {
  const dx = width / N;
  const dy = height / N;
  ctx.strokeStyle = "#acadad";

  for (let i = 0; i < N; i++) {
    ctx.beginPath();
    //горизонтальные полосы
    ctx.moveTo(0, i * dy);
    ctx.lineTo(width, i * dy);

    //вертикальные полосы
    ctx.moveTo(i * dx, 0);
    ctx.lineTo(i * dx, height);
    ctx.stroke();
  }
};
