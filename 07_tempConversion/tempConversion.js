const convertToCelsius = function(temp) {
  let temp2 = (temp-32)*(5/9);
  let roundedOff = Math.round(temp2*10)/10;
  return roundedOff;
};

const convertToFahrenheit = function(num  ) {
  let num2 = (num*9/5) + 32;
  let roundedOFf2 = Math.round(num2*10)/10;
  return roundedOFf2;
};

convertToCelsius();
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
