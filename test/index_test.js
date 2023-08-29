const assert = require('assert');
const Calculate = require('../index.js');

describe('Calculate', () =>{
  describe('.sum', () =>{
     it('returns the sum of an array of numbers', () =>{
        const expected = 6;
        const actual = Calculate.sum([1, 2, 3]);
        assert.strictEqual(actual, expected);
     })
   });
});