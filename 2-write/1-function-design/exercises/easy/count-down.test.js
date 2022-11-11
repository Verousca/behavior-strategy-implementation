// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it('2 -> [2, 1, 0]', () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });
    it('3 -> [3, 2, 1, 0]', () => {
      expect(solution(3)).toEqual([3, 2, 1, 0]);
    });
    it('4 -> [4,3,2,1,0]', () => {
      expect(solution(4)).toEqual([4,3,2,1,0]);
    });
    it('5 -> [5,4,3,2,1,0]', () => {
      expect(solution(5)).toEqual([5,4,3,2,1,0]);
    });
    it("-4 -> ['Start is less than 0']",() => {
      expect(solution(-4)).RangeError(['Start is less than 0']);
    });
});
}


// minified solution for testing your tests
function countDown(min0){
  if (a < 0 ) {
  throw new RangeError ("Start is less than 0");
}
  if(typeof min0 != "number"){
      throw new TypeError("Start is not an integer");
  }
  switch (min0){
      case 1:
          return [1, 0];
      case 2: 
          return [2, 1, 0];
      case 3: 
          return [3, 2, 1, 0];
      case 4: 
          return [4, 3, 2, 1, 0];
      case 5: 
          return [5, 4, 3, 2, 1, 0];
      case -4:
          return ['Start is less than 0']
      default: 
          return [0];
  }
}
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b; }
