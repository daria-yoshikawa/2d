export const drawAxios = (
  N: number,
  height: number,
  width: number,
  ctx: any
) => {
  const dx = width / N;
  const dy = height / N;
  ctx.font = "12px Segoe UI";
  ctx.strokeStyle = "#212121";
  for (let i = 0; i < N; i++) {
    ctx.beginPath();

    //текст
    ctx.strokeText(
      i < N / 2 ? "-" + String(N / 2 - i) : String(i - N / 2),
      i * dx + 10,
      height / 2 + 20
    );
    ctx.strokeText(
      i < N / 2 ? String(N / 2 - i) : i == N / 2 ? "" : "-" + String(i - N / 2),
      width / 2 + 10,
      i * dy + 5
    );

    //черточки
    ctx.moveTo(width / 2 - 4, i * dy);
    ctx.lineTo(width / 2 + 4, i * dy);

    ctx.moveTo(i * dx, height / 2 - 4);
    ctx.lineTo(i * dx, height / 2 + 4);

    //ось
    if (i == N / 2) {
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
    }
    ctx.stroke();
  }
};
