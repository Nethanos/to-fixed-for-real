# to-fixed-for-real

[![npm version](https://img.shields.io/npm/v/to-fixed-for-real.svg)](https://www.npmjs.com/package/to-fixed-for-real)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


A robust JavaScript utility to **truncate numbers to a fixed number of decimal places—without rounding errors**. Ideal for currency and financial calculations where precision and predictability are critical.

---

## ✨ Features
- Truncates numbers to a specified number of decimal places (no rounding)
- Handles both string and number inputs
- Accepts commas or periods as decimal separators
- Supports negative numbers
- Lightweight and dependency-free
- Fully tested with Jest

---

## Motivation
JavaScript’s native `toFixed` method rounds values, which can lead to inaccuracies in financial or scientific applications. This package provides a reliable way to **truncate** (not round) numbers to the desired decimal places, supporting both string and number inputs, and handling commas as decimal separators.

---

## Installation

```bash
npm install to-fixed-for-real
```

---

## Usage

### Basic Example
```js
const toFixed = require('to-fixed-for-real');

console.log(toFixed(12.599, 2)); // 12.59
console.log(toFixed('982,51832', 2)); // 982.51
console.log(toFixed(10, 2)); // 10.0
console.log(toFixed(-21381923.32938989, 2)); // -21381923.32
```

### Input/Output Table
| Input              | Code Example                        | Output         |
|--------------------|-------------------------------------|---------------|
| 12.599, 2          | `toFixed(12.599, 2)`                | `12.59`       |
| '982,51832', 2     | `toFixed('982,51832', 2)`           | `982.51`      |
| 10, 2              | `toFixed(10, 2)`                    | `10.0`        |
| -4.3, 2            | `toFixed(-4.3, 2)`                  | `-4.3`        |
| 1.2345, 2          | `toFixed(1.2345, 2)`                | `1.23`        |
| '10.58928', 2      | `toFixed('10.58928', 2)`            | `10.58`       |
| '164252,', 2       | `toFixed('164252,', 2)`             | `164252.0`    |
| 0, 2               | `toFixed(0, 2)`                     | `0`           |

### Edge Cases
```js
// Handles string input with comma as decimal
console.log(toFixed('164252,', 2)); // 164252.0

// Handles string input with no decimals
console.log(toFixed('10', 2)); // 10.0

// Handles zero
console.log(toFixed(0, 2)); // 0
```

---

## API

### `toFixed(num, floatingPoint)`

| Parameter      | Type            | Description                                                                 |
|--------------- |---------------- |-----------------------------------------------------------------------------|
| `num`          | number \| string | The value to truncate. Accepts numbers or strings (with `.` or `,`).         |
| `floatingPoint`| number          | The number of decimal places to keep. If omitted, all decimals are kept.     |

**Returns:** `number` — The truncated value.

#### Behavior
- Truncates, does not round.
- Handles negative numbers and string inputs.
- Converts commas to periods for decimal separation.

---

## Testing

This project uses [Jest](https://jestjs.io/).

```bash
npm test
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Please:
- Open an issue for bugs or feature requests
- Fork the repo and submit a pull request for improvements
- Add tests for new features or edge cases

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**nethanos**
