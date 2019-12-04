class StackDataStructure {
  constructor () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  canPush() {
    return this.size < this.MAX_SIZE;
  }

  push(item) {
    if (!this.canPush()) {return 'Stack Overflow'}
      this.stackControl[this.size] = item;
      this.size += 1;
    return this.stackControl;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack Underflow';
    }
    const lastItemIdx = this.size - 1;
    const lastItemArr = this.stackControl.splice(lastItemIdx,1);
    this.size -= 1;
    return lastItemArr[0];
  }
}
