"use strict";

let chainMaker = {
  values: [],

  [Symbol.toPrimitive](hint){
    return this.values.join("~~");
  },

  getLength() {
    return this.values.length;
  },

  addLink(value = "") {
    this.values.push(`( ${value} )`);
    return this;    
  },

  removeLink(position) {
    let pos = position - 1;
    if (pos < 0 || pos >= this.values.length){
      this.values = [];
      throw Error;
    }
    if (!(typeof(position) === "number")){
      this.values = [];
      throw Error;
    }
    this.values.splice(pos,1);
    return this;
  },

  reverseChain() {
    this.values.reverse();
    return this;
  },

  finishChain() {
    let str = String(this);
    this.values = [];
    return str;
  }
  
};

module.exports = chainMaker;
