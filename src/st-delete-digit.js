
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
   var result = 0,
        numDigits = [];
    while (n) {
        numDigits.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (var index_num = 0; index_num < numDigits.length; index_num++) {
        var num = 0;
        for (var i = numDigits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                num = num * 10 + numDigits[i];
            }
        }
        result = Math.max(num, result);
    }
    return result;
 
}
