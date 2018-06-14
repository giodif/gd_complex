"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Returns type for convenience
var _type = function _type() {
    return "Complex Number";
};

// Scalar operations
var _sadd2 = function _sadd2(c, s) {
    return c.map(function (n) {
        return n + s;
    });
};
var _ssubtract2 = function _ssubtract2(c, s) {
    return c.map(function (n) {
        return n - s;
    });
};
var _smultiply2 = function _smultiply2(c, s) {
    return c.map(function (n) {
        return n * s;
    });
};
var _sdivide2 = function _sdivide2(c, s) {
    return c.map(function (n) {
        return n / s;
    });
};

// Complex operations
var _iadd2 = function _iadd2(c, k) {
    return c.map(function (n, i) {
        return n + k[i];
    });
};
var _isubtract2 = function _isubtract2(c, k) {
    return c.map(function (n, i) {
        return n - k[i];
    });
};
var _imultiply2 = function _imultiply2(c, k) {
    return [c[0] * k[0] - c[1] * k[1], c[0] * k[1] + c[1] * k[0]];
};
var _idivide2 = function _idivide2(c, k) {
    return _sdivide2(_imultiply2(c, _conjugate2(k)), _sqrLength(k));
};

// Useful Complex operations
var _conjugate2 = function _conjugate2(c) {
    return [c[0], -c[1]];
};
var _sqrLength = function _sqrLength(c) {
    return c.map(function (n) {
        return n * n;
    }).reduce(function (a, b) {
        return a + b;
    });
};
var _length = function _length(c) {
    return Math.sqrt(_sqrLength(c));
};
var _reciprocal2 = function _reciprocal2(c) {
    return _sdivide2(_conjugate2(c), _sqrLength(c));
};
var _normalize2 = function _normalize2(c) {
    return _sdivide2(c, _length(c));
};
var _area = function _area(c) {
    return c[0] * c[1];
};

// export all of the operations
// if you don't want to create a bunch of objects
// these operations all return a new array [ r, i ]
// and can be nested for multiple operations
var _complex = exports._complex = {
    type: _type,
    sadd: _sadd2,
    ssubtract: _ssubtract2,
    smultiply: _smultiply2,
    sdivide: _sdivide2,
    iadd: _iadd2,
    isubtract: _isubtract2,
    imultiply: _imultiply2,
    idivide: _idivide2,
    conjugate: _conjugate2,
    sqrLength: _sqrLength,
    length: _length,
    reciprocal: _reciprocal2,
    normalize: _normalize2,
    area: _area

    // function to return "instances"
    // the functions are set up to allow chaining operations
    // but the number won't update
    // also some useful operations like cloning, etc
};var complex = exports.complex = function complex() {
    var real = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var imaginary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


    var _n = [real, imaginary];

    var ops = {
        value: function value() {
            return _n;
        },
        type: function type() {
            return _type();
        },
        // Make a new complex, use this if you want to chain without mutation
        clone: function clone() {
            return complex(_n[0], _n[1]);
        },

        // return scalars, NO CHAINING
        sqrLength: function sqrLength() {
            return _sqrLength(n);
        },
        length: function length() {
            return _length(n);
        },
        area: function area() {
            return _area(n);
        },

        // MUTATORS
        _sadd: function _sadd(s) {
            _n = _sadd2(_n, s);
            return ops;
        },
        _ssubtract: function _ssubtract(s) {
            _n = _ssubtract2(_n, s);
            return ops;
        },
        _smultiply: function _smultiply(s) {
            _n = _smultiply2(_n, s);
            return ops;
        },
        _sdivide: function _sdivide(s) {
            _n = _sdivide2(_n, s);
            return ops;
        },
        _iadd: function _iadd(i) {
            _n = _iadd2(_n, i.value());
            return ops;
        },
        _isubtract: function _isubtract(i) {
            _n = _isubtract2(_n, i.value());
            return ops;
        },
        _imultiply: function _imultiply(i) {
            _n = _imultiply2(_n, i.value());
            return ops;
        },
        _idivide: function _idivide(i) {
            _n = _idivide2(_n, i.value());
            return ops;
        },
        _conjugate: function _conjugate() {
            _n = _conjugate2(_n);
            return ops;
        },
        _reciprocal: function _reciprocal() {
            _n = _reciprocal2(_n);
            return ops;
        },
        _normalize: function _normalize() {
            _n = _normalize2(_n);
            return ops;
        },

        // These won't mutate
        sadd: function sadd(s) {
            return ops.clone()._sadd(s);
        },
        ssubtract: function ssubtract(s) {
            return ops.clone()._ssubtract(s);
        },
        smultiply: function smultiply(s) {
            return ops.clone()._smultiply(s);
        },
        sdivide: function sdivide(s) {
            return ops.clone()._sdivide(s);
        },
        iadd: function iadd(i) {
            return ops.clone()._iadd(i);
        },
        isubtract: function isubtract(i) {
            return ops.clone()._isubtract(i);
        },
        imultiply: function imultiply(i) {
            return ops.clone()._imultiply(i);
        },
        idivide: function idivide(i) {
            return ops.clone()._idivide(i);
        },
        conjugate: function conjugate() {
            return ops.clone()._conjugate();
        },
        reciprocal: function reciprocal() {
            return ops.clone()._reciprocal();
        },
        normalize: function normalize() {
            return ops.clone()._normalize();
        }
    };

    return ops;
};
