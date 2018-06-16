var assert = require('assert');
var complex = require("../gd_complex.es5").complex;

describe( "graph introspection", function(){
    describe( 'mutator functions', function(){
        describe( '_sadd()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._sadd(2)
                assert.equal(c.re(), 3);
                assert.equal(c.im(), 1);
            });
        });
        describe( '_ssubtract()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._ssubtract(3);
                assert.equal(c.re(), -2);
                assert.equal(c.im(), 1);
            });
        });
        describe( '_smultiply', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._smultiply(2);
                assert.equal(c.re(), 2);
                assert.equal(c.im(), 2);
            });
        });
        describe( '_sdivide', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 4, 4 );
                c._sdivide(2);
                assert.equal(c.re(), 2);
                assert.equal(c.im(), 2);
            });
        });
        describe( '_iadd()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._iadd(complex(3, 2));
                assert.equal(c.re(), 4);
                assert.equal(c.im(), 3);
            });
        });
        describe( '_isubtract()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 4, 4 );
                c._isubtract(complex(2, 1));
                assert.equal(c.re(), 2);
                assert.equal(c.im(), 3);
            });
        });
        describe( '_imultiply()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._imultiply(complex(2, 3));
                assert.equal(c.re(), -1);
                assert.equal(c.im(), 5);
            });
        });
        describe( '_idivide()', function(){
            it( 'alter the number and return the appropriate value', function(){
                var c = complex( 1, 1 );
                c._idivide(complex(1, 1));
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
    });
    
    describe( 'immutatable functions', function(){
        var c = complex( 1, 0 );
        var d = complex( 0, 1 );
        describe( 'sadd()', function(){
            it( 'not alter the number and return the original value', function(){
                c.sadd(2)
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'ssubtract()', function(){
            it( 'not alter the number and return the original value', function(){
                c.ssubtract(2);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'smultiply()', function(){
            it( 'not alter the number and return the original value', function(){
                c.smultiply(2);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'sdivide()', function(){
            it( 'not alter the number and return the original value', function(){
                c.sdivide(2);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'iadd()', function(){
            it( 'not alter the number and return the original value', function(){
                c.iadd(d);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'isubtract()', function(){
            it( 'not alter the number and return the original value', function(){
                c.isubtract(d);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'imultiply()', function(){
            it( 'not alter the number and return the original value', function(){
                c.imultiply(d);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
        describe( 'idivide()', function(){
            it( 'not alter the number and return the original value', function(){
                c.idivide(d);
                assert.equal(c.re(), 1);
                assert.equal(c.im(), 0);
            });
        });
    });

    describe( 'access functions', function(){
        describe( "value()", function(){
            it( 'should return the current values of the complex number', function(){
                var c = complex(2, 5).value();
                assert.equal(c[0], 2);
                assert.equal(c[1], 5);
            });
        });
        describe( "re()", function(){
            it( 'should return the real component of the complex number', function(){
                assert.equal(complex(2, 5).re(), 2);
            });
        });
        describe( "im()", function(){
            it( 'should return the imaginary component of the complex number', function(){
                assert.equal(complex(2, 5).im(), 5);
            });
        });
        describe( "type()", function(){
            it( 'should return the type of "Complex Number"', function(){
                assert.equal(complex(2, 5).type(), "Complex Number");
            });
        });
    });

    describe( 'other useful operations', function(){
        describe( 'conjugate()', function(){
            it( 'should reverse the imaginary part of teh number', function(){
                assert.equal(complex(1, 5).conjugate().im(), -5);
            });
        });
        describe( 'reciprocal()', function(){
            it( 'should reverse the imaginary part of teh number', function(){
                assert.equal(complex(1, 1).reciprocal().re(), 0.5);
                assert.equal(complex(1, 1).reciprocal().im(), -0.5);
            });
        });
        describe( 'normalize()', function(){
            it( 'should reduce the magnitude of the number to 1', function(){
                assert.equal(complex(2, 0).normalize().re(), 1);
            });
        });
        describe( 'sqrLength()', function(){
            it( 'should return the square of the length of the vector', function(){
                assert.equal(complex(2, 0).sqrLength(), 4);
            });
        });
        describe( 'length()', function(){
            it( 'should return the length of the vector', function(){
                assert.equal(complex(2, 0).length(), 2);
            });
        });
        describe( 'area()', function(){
            it( 'should return the product of the real and imaginary parts of the number', function(){
                assert.equal(complex(2, 2).area(), 4);
            });
        });
        describe( 'clone()', function(){
            it( 'should return a new number with the same initial values', function(){
                assert.equal(complex(3, 2).clone().re(), 3);
                assert.equal(complex(3, 2).clone().im(), 2);
            });
        });
        describe( 'angle()', function(){
            it( 'should return the (counter clockwise) angle between the vector and [1, 0]', function(){
                assert.equal(complex(0, 1).angle(), Math.PI / 2 );
            });
        });
    });
});




