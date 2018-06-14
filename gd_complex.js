// Returns type for convenience
const _type       = () => "Complex Number"

// Scalar operations
const _sadd       = (c, s) => c.map( n => n + s )
const _ssubtract  = (c, s) => c.map( n => n - s )  
const _smultiply  = (c, s) => c.map( n => n * s )
const _sdivide    = (c, s) => c.map( n => n / s )

// Complex operations
const _iadd       = (c, k) => c.map( ( n, i ) => n + k[i] )
const _isubtract  = (c, k) => c.map( ( n, i ) => n - k[i] )
const _imultiply  = (c, k) => [ c[ 0 ] * k[ 0 ] - c[ 1 ] * k[ 1 ], c[ 0 ] * k[ 1 ] + c[ 1 ] * k[ 0 ] ]
const _idivide    = (c, k) => _sdivide( _imultiply( c, _conjugate( k ) ), _sqrLength( k ) )

// Useful Complex operations
const _conjugate  = c => [ c[ 0 ], -c[ 1 ] ]             
const _sqrLength  = c => c.map( n => n * n ).reduce( (a, b) => a + b )
const _length     = c => Math.sqrt( _sqrLength( c ) )
const _reciprocal = c => _sdivide( _conjugate( c ), _sqrLength( c ) )
const _normalize  = c => _sdivide( c, _length( c ) )
const _area       = c => c[ 0 ] * c[ 1 ]

// export all of the operations
// if you don't want to create a bunch of objects
// these operations all return a new array [ r, i ]
// and can be nested for multiple operations
export const _complex = {
    type       : _type,
    sadd       : _sadd,
    ssubtract  : _ssubtract,
    smultiply  : _smultiply,
    sdivide    : _sdivide,
    iadd       : _iadd,
    isubtract  : _isubtract,
    imultiply  : _imultiply,
    idivide    : _idivide,
    conjugate  : _conjugate,
    sqrLength  : _sqrLength,
    length     : _length,
    reciprocal : _reciprocal,
    normalize  : _normalize,
    area       : _area
}

// function to return "instances"
// the functions are set up to allow chaining operations
// but the number won't update
// also some useful operations like cloning, etc
export const complex = ( real = 0, imaginary = 0 ) => {

    let _n = [ real, imaginary ]

    const ops = {
        value : () => _n,
        type  : () => _type(),
        // Make a new complex, use this if you want to chain without mutation
        clone : () => complex( _n[ 0 ], _n[ 1 ] ),

        // return scalars, NO CHAINING
        sqrLength  : () => _sqrLength( n ),
        length     : () => _length( n ),
        area       : () => _area( n ),

        // MUTATORS
        _sadd : s => { 
            _n = _sadd( _n, s );     
            return ops;
        },
        _ssubtract : s => { 
            _n = _ssubtract( _n, s ); 
            return ops;
        },
        _smultiply : s => { 
            _n = _smultiply( _n, s ); 
            return ops;
        },
        _sdivide : s => { 
            _n = _sdivide( _n, s );   
            return ops;
        },
        _iadd : i => { 
            _n = _iadd( _n, i.value() );      
            return ops;
        },
        _isubtract : i => { 
            _n = _isubtract( _n, i.value() ); 
            return ops;
        },
        _imultiply : i => { 
            _n = _imultiply( _n, i.value() ); 
            return ops;
        },
        _idivide : i => { 
            _n = _idivide( _n, i.value() );   
            return ops;
        },
        _conjugate : () => {
            _n = _conjugate( _n );  
            return ops;
        },
        _reciprocal : () => {
            _n = _reciprocal( _n ); 
            return ops;
        },
        _normalize : () => {
            _n = _normalize( _n );  
            return ops;
        },
        
        // These won't mutate
        sadd       : s => ops.clone()._sadd( s ),
        ssubtract  : s => ops.clone()._ssubtract( s ),
        smultiply  : s => ops.clone()._smultiply( s ),
        sdivide    : s => ops.clone()._sdivide( s ),
        iadd       : i => ops.clone()._iadd( i ),
        isubtract  : i => ops.clone()._isubtract( i ),
        imultiply  : i => ops.clone()._imultiply( i ),
        idivide    : i => ops.clone()._idivide( i ),
        conjugate  : () => ops.clone()._conjugate(),
        reciprocal : () => ops.clone()._reciprocal(),
        normalize  : () => ops.clone()._normalize()
    }

    return ops;
}