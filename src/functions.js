export const plus = (a, b) => {
  return Number(a) + Number(b);
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};

export const   decimal=( str )=> {
  return str.replace(/\./,"#").replace(/\./g,"").replace(/#/,".");
}