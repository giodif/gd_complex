var complex = require("./gd_complex.es5").complex;

const a = complex( 2, 3 )
const b = complex( 5, 3 )
const c = complex( 1, 0 )
const d = complex( 0, 0.5 )

// console.log( a.value(), b.value() )

// console.log( "sadd()", a.sadd( 2 ).value() )
// console.log( "ssubtract()", a.ssubtract( 1 ).value() )
// console.log( "smultiply()", a.smultiply( 2 ).value() )
// console.log( "sdivide()", a.sdivide( 2 ).value() )

// console.log( "iadd()", a.iadd( b ).value() )
// console.log( "isubtract()", a.isubtract( b ).value() )
// console.log( "imultiply()", a.imultiply( b ).value() )
// console.log( "idivide()", a.idivide( b ).value() )

// console.log( "conjugate()", a.conjugate().value() )
// console.log( "reciprocal()", a.reciprocal().value() )
// console.log( "normalize()", a.normalize().value() )

console.log( c.imultiply( complex( 0, 0.25 ) ).value() )
console.log( c.imultiply( complex( 0, 0.5 ) ).value() )
console.log( c.imultiply( complex( 0, 0.75 ) ).value() )
console.log( c.imultiply( complex( 0, 1 ) ).value() )



