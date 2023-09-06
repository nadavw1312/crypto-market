export const generateArrayFromOneToN = (number: number) => {
  return Array.from({ length: number }, (_, index) => index + 1);
};

export const twoDecimals = (number: number) => {
  return number.toFixed(2);
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
