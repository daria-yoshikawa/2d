export const calculateFunc = (
  func: string,
  N: number,
  start: number,
  end: number
) => {
  func = func.replace("y", "");
  func = func.replace("=", "");
  func = func.replace(" ", "");
  func = func.replace("-", "+-");

  const newFunc = func.split("+") as string[];

  const result: [][] = [];
  const step = 10 / N;
  for (let i = start; i < end; i = i + step) {
    let temp = 0;
    newFunc.forEach((element) => {
      if (element.includes("*")) {
        temp = 1;
        element.split("*").forEach((el) => {
          if (el == "x") {
            temp *= i;
          } else {
            temp *= Number(el);
          }
        });
      } else if (element.includes("/")) {
        temp = 1;
        element.split("/").forEach((el, index) => {
          if (index == 0) {
            if (el == "x") {
              temp = i;
            } else {
              temp = Number(el);
            }
          } else if (el == "x") {
            temp /= i;
          } else {
            temp /= Number(el);
          }
        });
      } else if (element == "x") {
        temp += i;
      } else {
        temp += Number(element);
      }
    });
    result.push([i, temp]);
  }
  return result;
};
