let minuts = 0;
let second = 0;
let milsecon = 0;
export function timer() {
  var hAux, mAux, sAux;
  milsecon++;
  if (milsecon > 999) {
    second++;
    milsecon = 0;
  }
  if (second > 59) {
    minuts++;
    second = 0;
  }
  if (minuts > 59) {
    minuts = 0;
  }

  if (milsecon < 10) {
    sAux = "0" + milsecon;
  } else {
    sAux = milsecon;
  }
  if (second < 10) {
    mAux = "0" + second;
  } else {
    mAux = second;
  }
  if (minuts < 10) {
    hAux = "0" + minuts;
  } else {
    hAux = minuts;
  }
  return `YOUR TIME: ${hAux}:${mAux}:${sAux} `;
}
