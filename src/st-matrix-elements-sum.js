
/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let susp = [];
    return matrix.reduce((t, arr, i)=>{
        return arr.reduce((tt, val, ii)=>{
            if (val === 0) susp.push(ii);
            if (susp.includes(ii)) {
               return tt;
            } else {
               return tt+val;
            } 
        }, 0) + t;
    }, 0); 
    
}
