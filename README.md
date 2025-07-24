# to-fixed-for-real

A robust JavaScript utility to truncate numbers to a fixed number of decimal places—without rounding errors. Ideal for currency and financial calculations where precision and predictability are critical.

## Motivation
JavaScript’s native `toFixed` method rounds values, which can lead to inaccuracies in financial or scientific applications. This package provides a reliable way to truncate (not round) numbers to the desired decimal places, supporting both string and number inputs, and handling commas as decimal separators.

## Installation
```bash
npm install to-fixed-for-real
```

## Usage
```js
const toFixed = require('to-fixed-for-real');

console.log(toFixed(12.599, 2)); // 12.59
console.log(toFixed('982,51832', 2)); // 982.51
console.log(toFixed(10, 2)); // 10.0
console.log(toFixed(-21381923.32938989, 2)); // -21381923.32
```

## API
### `toFixed(num, floatingPoint)`
- `num` (`number|string`): The value to truncate. Accepts numbers or strings (with `.` or `,` as decimal separator).
- `floatingPoint` (`number`): The number of decimal places to keep. If omitted, all decimals are kept.
- **Returns:** `number` — The truncated value.

#### Behavior
- Truncates, does not round.
- Handles negative numbers and string inputs.
- Converts commas to periods for decimal separation.

## Testing
This project uses [Jest](https://jestjs.io/).

```bash
npm test
```

## Contributing
Contributions, issues, and feature requests are welcome! Please open an issue or submit a pull request.

## License
ISC

## Author
nethanos
