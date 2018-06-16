# GD Complex

## Import

```
// ES6
import complex from "gd_complex"
// or ES5
var complex = require("../gd_complex.es5").complex;
```

## Create

```javascript

// create a function
// real and imaginary components
// in this case real -> 1 imaginary -> 2
const c = complex(1, 2)

```

## Chaining

Complex is designed to make sequences of operations a little easier and functional. To that end, functions are chainable as they either operate in place and return themselves, or remain immutable and return a new complex number that contains the result of the operation.

```javascript

const y = complex(3, 4)
const x = complex(1, 2) // 1, 2
        ._sadd(3) // 4, 2
        ._smultiply(2) // 8, 4
        ._iadd(y) // 24, 16

```

## Mutator Functions

These functions (prefixed with an underscore) will alter the complex number in place. 

### Scalar Operations

```javascript

// scalar addition
complex(1, 2)._sadd(3) // 4, 2
// scalar subtraction
complex(1, 2)._ssubtract(5) // -4, 2
// scalar multiplication
complex(1, 2)._smultiply(2) // 2, 4
// scalar division
complex(1, 2)._sdivide(2) // 0.5, 1

```

### Complex Operations

```javascript

// complex addition
complex(1, 2)._iadd(complex(1, 2)) // 2, 4
// complex subtraction
complex(1, 2)._isubtract(complex(1, 2)), // 0, 0
// complex multiplication
complex(1, 2)._imultiply(complex(1, 2)) // -3, 4
// complex division
complex(1, 2)._idivide(complex(1, 3)) // 0.7, 0.1

```

## Static Functions

These functions do not modify the original complex number and always return a new number. In my opinion, lots more useful, but to each their own. Notice that these are the same as the Mutator Functions without the underscore.

### Scalar Operations

```javascript

// scalar addition
complex(1, 2).sadd(3) // 4, 2
// scalar subtraction
complex(1, 2).ssubtract(5) // -4, 2
// scalar multiplication
complex(1, 2).smultiply(2) // 2, 4
// scalar division
complex(1, 2).sdivide(2) // 0.5, 1

```

### Complex Operations

```javascript

// complex addition
complex(1, 2).iadd(complex(1, 2)) // 2, 4
// complex subtraction
complex(1, 2).isubtract(complex(1, 2)), // 0, 0
// complex multiplication
complex(1, 2).imultiply(complex(1, 2)) // -3, 4
// complex division
complex(1, 2).idivide(complex(1, 3)) // 0.7, 0.1

```

## Access Functions

```javascript

// return the values of the complex number in an list
complex(1, 2).value() // [1, 2]
// return the real part of the complex number
complex(1, 2).re() // 1
// return the imaginary part of the complex number
complex(1, 2).im() // 2
// return the type of the number
complex(1, 2).type() // "Complex Number"

```

## Other Useful Functions

```javascript

complex(1, 2).conjugate()
complex(1, 2).reciprocal()
complex(1, 2).normalize()
complex(1, 2).sqrLength()
complex(1, 2).length()
complex(1, 2).area()
complex(1, 2).clone()
// returns the counterclockwise angle between the vector [1,0]
// and the complex number. radians 0 -> 2PI
complex(1, 2).angle()

```

