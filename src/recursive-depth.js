/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    const result = [];
    for (const curr of arr) {
      if (Array.isArray(curr)) {
        counter += 1;
        calculateDepth(curr);
      }
      result.push(counter);
      counter = 1;
    }
    return Math.max.apply(null, result);
  }
}
