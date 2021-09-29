/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const result = [];
  members.forEach((member) =>
    typeof member === "string"
      ? result.push(member.replace(/\s/g, "").substr(0, 1).toUpperCase())
      : null
  );

  return result.sort().join("");
  // remove line with error and write your code here
}
