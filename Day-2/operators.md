# JavaScript Operators Cheat Sheet

## Arithmetic Operators
Perform basic mathematical operations.

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Remainder (Modulus)

## Assignment Operators
Assign values to variables, often with shorthand.

- `=` : Assign
- `+=` : Add and assign
- `-=` : Subtract and assign

## Comparison Operators
Compare two values and return a boolean.

- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to
- `==` : Loose equality
- `===` : Strict equality
- `!=` : Loose inequality
- `!==` : Strict inequality

## Logical Operators
Perform logical operations on boolean values, returning a boolean or one of the operands based on truthiness.

#### Logical AND (`&&`)
Returns the first falsy value if one is found; otherwise, it returns the last value.
- **Syntax**: `a && b`

#### Logical OR (`||`)
Returns the first truthy value if one is found; otherwise, it returns the last value.
- **Syntax**: `a || b`

#### Logical NOT (`!`)
Inverts the boolean value of the operand; returns `true` if falsy and `false` if truthy.
- **Syntax**: `!a`

#### Nullish Coalescing (`??`)
Returns the right-hand operand if the left-hand operand is `null` or `undefined`; otherwise, returns the left-hand operand.
- **Syntax**: `a ?? b`

## Ternary Operator
A shorthand for `if-else` statements.

**Syntax**:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

## Unary Operators
Modify the value of a variable by increasing or decreasing it by one.

- **Increment**:
  - Prefix: `++variable`
  - Postfix: `variable++`

- **Decrement**:
  - Prefix: `--variable`
  - Postfix: `variable--`

## Bitwise Operators
Perform operations on binary representations of numbers.

- `&` : Bitwise AND
- `|` : Bitwise OR
- `^` : Bitwise XOR
- `~` : Bitwise NOT
- `<<` : Left Shift
- `>>` : Sign-propagating Right Shift
- `>>>` : Zero-fill Right Shift

---

This cheat sheet provides a concise reference for various operators in JavaScript, ideal for quick lookups and review.