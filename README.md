# format-throw

[![Build Status](https://travis-ci.org/fza/format-throw.svg)](https://travis-ci.org/fza/format-throw) [![Coverage Status](https://coveralls.io/repos/fza/format-throw/badge.svg?branch=master)](https://coveralls.io/r/fza/format-throw?branch=master) [![Dependency Status](https://david-dm.org/fza/format-throw.svg)](https://david-dm.org/fza/format-throw) [![devDependency Status](https://david-dm.org/fza/format-throw/dev-status.svg)](https://david-dm.org/fza/format-throw#info=devDependencies)

[![NPM](https://nodei.co/npm/format-throw.png)](https://npmjs.org/package/format-throw)

> Tiny utility to throw errors with formatted messages and support for custom error classes.

## Installation

```shell
npm install --save format-throw
```

## Usage

```javascript
var thr = require('format-throw');

// Throw a TypeError
thr(TypeError, '%s is not %s', 'foo', 'bar');

// Throw a default Error
thr('The meaning of life is %d', 42);

// Return the error instance instead of throwing it
var err1 = thr.make(TypeError, 'meaningOfLife should be %d', '42');
var err2 = thr.make("Inked %s ain't %s", 'donkeys', 'zebras');
```

## Contributing

Take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `grunt test`.

## License

Copyright (c) 2015 [Felix Zandanel](mailto:felix@zandanel.me)  
Licensed under the MIT license.

See LICENSE for more info.
