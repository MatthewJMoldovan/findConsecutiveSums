// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const numbers1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const numbers2 = [];
const sum2 = 5;
const expected2 = [];

const numbers3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const numbers4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const numbers5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsecutiveSums(numbers, targetSum) { 
    const sumArray = [];

    for (let i=0; i< numbers.length; i++) {
        let sum = numbers[i];

        for (let j=i+1; j<numbers.length; j++) {
            sum += numbers[j];

            if (sum > targetSum) {
                continue;
            } else if (sum === targetSum) {
                sumArray.push(numbers.slice(i, j + 1));
            } 
        }
    }

    return sumArray

}

console.log("test 1");
console.log(findConsecutiveSums(numbers1,16));
console.log("test 2");
console.log(findConsecutiveSums(numbers2,5));
console.log("test 3");
console.log(findConsecutiveSums(numbers3,5));
console.log("test 4");
console.log(findConsecutiveSums(numbers4,16));
console.log("test 5");
console.log(findConsecutiveSums(numbers5,-16));