import { Point } from "../types/Point";

export const checkLimits = (position: number) => {
  if (position >= 2040 && position <= 0) {
    return true;
  }
  return false;
};
