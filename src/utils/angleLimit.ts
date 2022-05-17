import { Point } from "../types/Point";

export const checkAngle = (angle: number) => {
  if (angle < 45 && angle > -45) {
    return true;
  }
  return false;
};
