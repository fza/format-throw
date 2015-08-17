'use strict';

var expect = require('chai').expect;
var thr = require('..');

describe('thr()', function () {
  it('should throw an error with a custom constructor and a formatted message', function () {
    var err;
    try {
      thr(TypeError, '%j is not %s', 'foo', 'bar');
    } catch (e) {
      err = e;
    }

    expect(err).to.be.an.instanceOf(TypeError);
    expect(err.message).to.equal('"foo" is not bar');
  });

  it('should throw a default Error when called without a specific constructor', function () {
    var err;
    try {
      thr('%s is not %s', 'foo', 'bar');
    } catch (e) {
      err = e;
    }

    expect(err).to.be.an.instanceOf(Error);
    expect(err.message).to.equal('foo is not bar');
  });
});

describe('thr.make()', function () {
  it('should return an error instance with a formatted message instead of throwing it', function () {
    var err = thr.make(TypeError, '%s is not %s', 'foo', 'bar');

    expect(err).to.be.an.instanceOf(TypeError);
    expect(err.message).to.equal('foo is not bar');
  });
});
