import { Point } from "../types/Point";

export const checkAngle = (angle: number) => {
  if (angle < 25 && angle > -25) {
    return true;
  }
  return false;
};
