module.exports = function toFixed(num, floatingPoint) {
    if (num.toString().includes(',')) num = num.toString().replace(',', '.');

    const regex = new RegExp('^-?\\d+(?:.\\d{0,' + (floatingPoint || -1) + '})?');

    return Number(num.toString().match(regex)[0]);
  }
