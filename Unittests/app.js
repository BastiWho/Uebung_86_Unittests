function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  module.exports = { toCelcius, toFahrenheit };