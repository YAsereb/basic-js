const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(members)) {
    let arr = [];
    let name;
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        members[i] = members[i].replace(/\s+/g, '');
        arr.push(members[i][0].toUpperCase())
        for (let j = 0; j < members[i].length; j++) {

          if (members[i][j] === ' ') {
            arr.push(members[i][j + 1].toUpperCase())
          }
        }

      }
    }
    if (arr.length === 0) {
      return false
    }

    name = arr.sort().join("")
    return name;
  } return false


}

module.exports = {
  createDreamTeam
};
