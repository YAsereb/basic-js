const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [];

    let discardNextStr = "--discard-next";
    let discardPrevStr = "--discard-prev";
    let doubleNextStr = "--double-next";
    let doublePrevStr = "--double-prev";

    // for (let i = 0; i < arr.length; i++) {
    //   newArr.push(arr[i]);
    // }

    // for (let i = 0; i < newArr.length; i++) {
    //   if (newArr[i] === discardNextStr) {
    //     if (newArr.indexOf(newArr[i + 1]) !== -1) {
    //       newArr.splice(newArr.indexOf(newArr[i + 1]), 1);
    //       newArr.splice(newArr.indexOf(newArr[i]), 1);
    //     }
    //     newArr.splice(newArr.indexOf(newArr[i]), 1);

    //   } else if (newArr[i] === discardPrevStr) {
    //     if (newArr.indexOf(newArr[i - 1]) !== - 1) {
    //       newArr.splice(newArr.indexOf(newArr[i - 1]), 1);
    //       newArr.splice(newArr.indexOf(newArr[i - 1]), 1);
    //     }
    //     console.log(newArr.indexOf(newArr[i - 1]));
    //     newArr.splice(newArr.indexOf(newArr[i]), 1);

    //   } else if (newArr[i] === doubleNextStr) {
    //     if (i < newArr.length) {
    //       newArr.splice(newArr.indexOf(newArr[i + 1]), 0, newArr[i + 1]);
    //       newArr.splice(newArr.indexOf(newArr[i]), 1);
    //     }
    //     newArr.splice(newArr.indexOf(newArr[i]), 1);

    //   } else if (newArr[i] === doublePrevStr) {
    //     if (newArr.indexOf(newArr[i - 1]) !== - 1) {
    //       newArr.splice(newArr.indexOf(newArr[i - 1]), 0, newArr[i - 1]);
    //       newArr.splice(newArr.indexOf(newArr[i + 1]), 1);
    //     }
    //     newArr.splice(newArr.indexOf(newArr[i]), 1);
    //   }
    // }
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] !== discardNextStr && arr[i] !== discardPrevStr && arr[i] !== doubleNextStr && arr[i] !== doublePrevStr) {
        if (arr[i - 1] !== discardNextStr && arr[i + 1] !== discardPrevStr) {
          newArr.push(arr[i])
        }
        if (arr[i - 1] === doubleNextStr && arr[i + 1] === discardPrevStr) {
          newArr.push(arr[i])
        }
        if (arr[i - 1] === doubleNextStr && arr[i + 1] === doublePrevStr) {
          newArr.push(arr[i])
          newArr.push(arr[i])

        }

      }
    }
    return newArr;
  } else {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
};

module.exports = {
  transform
};
