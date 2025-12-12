# to-do-list

# Jest Testing Practice Project

A practice project for learning Jest testing fundamentals with JavaScript.

## Setup

Install dependencies:
```bash
npm install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

Run a specific test file:
```bash
npm test src/jest-practice.test.js
```

## Running JavaScript Files

To run a JavaScript file directly with Node:
```bash
node src/filename.js
```

## Project Structure
```
testing-practice-project-jest/
├── src/
│   ├── jest-practice.js       # Function implementations
│   └── jest-practice.test.js  # Jest test suite
├── package.json
└── README.md
```

## Testing Tips

### Testing Return Values
Call the function directly:
```javascript
expect(capitalise("hello")).toBe("Hello");
```

### Testing Errors
Wrap the function call in an arrow function:
```javascript
expect(() => capitalise(42)).toThrow();
```

**Rule of thumb:** Only use arrow function wrapper with `.toThrow()` - everything else calls the function directly.

## Common Jest Matchers

- `.toBe(value)` - strict equality (===)
- `.toEqual(value)` - deep equality for objects/arrays
- `.toThrow()` - expects function to throw error
- `.toBeTruthy()` / `.toBeFalsy()` - boolean checks
- `.toContain(item)` - checks if array/string contains item

## Notes

- Use `it.only()` or `test.only()` to run a single test
- Use `it.skip()` or `test.skip()` to skip a test
- Remember: functions that throw errors need arrow function wrappers in tests!
