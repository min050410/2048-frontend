// Deque 자료구조
export default class Deque {
    constructor() {
      this._arr = [];
    }
    push_back(item) {
      this._arr.push(item);
    }
    pop_front() {
      return this._arr.shift();
    }
    pop_back() {
      return this._arr.pop();
    }
    front() {
      return (this._arr.length !== 0) ? this._arr[0] : '-1';
    }
    back() {
      return (this._arr.length !== 0) ? this._arr[this._arr.length - 1] : '-1';
    }
    size() {
      return this._arr.length;
    }
    empty() {
      return this._arr.length ? true : false;
    }
    print_all() {
      let message = '';
      for (let i = 0; i < this._arr.length; i++) {
        if (i === this._arr.length - 1) {
          message += this._arr[i];
          break;
        }
        message += this._arr[i] + ', ';
      }
      console.log(`now queue: [${message}]`);
    }
  }