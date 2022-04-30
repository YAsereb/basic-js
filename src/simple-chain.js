const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: [],
  chain: '',

  getLength() {
    return this.str.length
  },

  addLink(value) {


    if (typeof value === 'object') {
      if (value === null) {
        this.str.push(`( null )~~`);
        return this
      } else {
        this.str.push(`( [object Object] )~~`);
        return this
      }
    }
    this.str.push(`( ${value} )~~`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0 && position > 0 && position < this.str.length) {

      this.str.splice(this.str.indexOf(this.str[position - 1]), 1);

      return this

    } else {
      this.str = [];
      throw Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {

    this.str = this.str.reverse();
    return this;
  },
  finishChain() {

    this.str = this.str.join("");
    if (this.str[0] === "~") {
      this.str = this.str.slice(2);
    } else {
      this.str = this.str.slice(0, -2);
    }
    console.log(this.str);
    this.chain = this.str;
    this.str = []
    return this.chain;

  }
};

module.exports = {
  chainMaker
};
