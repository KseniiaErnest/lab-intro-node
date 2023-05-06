class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else return 0
    });
    this.length = this.items.length;
    
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } 
      return Math.max(...this.items);       
      // if our values are not numbers:
      // return this.items[this.items.length - 1];
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } 
      return Math.min(...this.items);
  }

  sum() {
    if (!this.length) {
      return 0
    } else {
      return this.items.reduce((a, b) => a +  b)
    }
    
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
    return this.sum() / this.items.length;
  }
  }
}

module.exports = SortedList;
