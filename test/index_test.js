const assert = require('assert');
const Calculate = require('../index.js');

describe('Calculate', () =>{
  describe('.sum', () =>{
     it('returns the sum of an array of numbers', () =>{
        // Setup
        const numArr = [1, 2, 3];
        const expected = 6;
        // Exercise
        const actual = Calculate.sum(numArr);
        // Verification
        assert.strictEqual(actual, expected);
     });
   });
});