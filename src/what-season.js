/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  const month = new Map([
    [1, "winter"],
    [2, "winter"],
    [3, "spring"],
    [4, "spring"],
    [5, "spring"],
    [6, "summer"],
    [7, "summer"],
    [8, "summer"],
    [9, "autumn"],
    [10, "autumn"],
    [11, "autumn"],
    [12, "winter"],
  ]);

  if (
    date instanceof Date &&
    Object.prototype.toString.call(date) === "[object Date]"
  )
    return month.get(date.getMonth() + 1);
  if (!date) return "Unable to determine the time of year!";
  throw "Invalid date!";
}
