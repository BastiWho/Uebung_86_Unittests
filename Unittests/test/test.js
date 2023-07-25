const { expect } = require('chai');
const { toCelcius, toFahrenheit } = require('../app.js');

describe('toCelcius', () => {
    it('Sollte 32 °F umwandeln. Ergebnis sollte 0 °C sein', () => {
      expect(toCelcius(32)).to.equal(0);
    });
  
    it('Sollte 302 °F umwandeln. Ergebnis sollte 150 °C sein', () => {
      expect(toCelcius(302)).to.equal(150);
    });
  
    it('Sollte -40 °F umwandeln. Ergebnis sollte -40 °C sein', () => {
      expect(toCelcius(-40)).to.equal(-40);
    });
    it('Sollte 212 °F umwandeln. Ergebnis sollte 100°C sein', () => {
        expect(toCelcius(212)).to.equal(100);
      });
  });
  
  
  describe('toFahrenheit', () => {
    it('Sollte 0°C in Fahrenheit umrechnen. Ergbnis sollte 32 °F sein', () => {
      expect(toFahrenheit(0)).to.equal(32);
    });
  
    it('Sollte 150°C in Fahrenheit umrechnen. Ergbnis sollte 302 °F sein', () => {
      expect(toFahrenheit(150)).to.equal(302);
    });
  
    it('Sollte -40°C in Fahrenheit umrechnen. Ergbnis sollte -40 °F sein', () => {
      expect(toFahrenheit(-40)).to.equal(-40);
    });
    it('Sollte 100°C in Fahrenheit umrechnen. Ergbnis sollte 212 °F sein', () => {
        expect(toFahrenheit(100)).to.equal(212);
    });
  });