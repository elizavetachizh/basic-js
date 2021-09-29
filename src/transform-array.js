/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw "'arr' parameter must be an instance of the Array!";
  arr.forEach((el, index) => {
    switch (el) {
      case "--discard-next":
        if (el !== arr[arr.length - 1]) {
          arr.splice(index + 1, 1);
          arr.splice(index, 1);
        }
        arr.splice(arr.indexOf(el), 1);
        break;
      case "--discard-prev":
        if (el !== arr[0]) {
          arr.splice(index, 1);
          arr.splice(index - 1, 1);
        }
        arr.splice(arr.indexOf(el), 1);
        break;
      case "--double-next":
        if (el !== arr[arr.length - 1]) {
          arr.splice(index, 1);
          arr.splice(index, 0, arr[index]);
        }
        arr.splice(arr.indexOf(el), 1);
        break;
      case "--double-prev":
        if (el !== arr[0]) {
          arr.splice(index, 1);
          arr.splice(index, 0, arr[index - 1]);
        }
        arr.splice(arr.indexOf(el), 1);
        break;
      default:
        return el;
    }
  });
  return arr;
}
