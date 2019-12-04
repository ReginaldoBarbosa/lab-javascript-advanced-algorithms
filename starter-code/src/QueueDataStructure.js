class QueueDataStructure {
  constructor () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  canEnqueue() {
    return this.size < this.MAX_SIZE;
  }

  enqueue(item) {
    if (!this.canEnqueue()) {return 'Queue Overflow'}
      this.queueControl.unshift(item);
      // const lastItemIdx = this.size - 1;
      // this.queueControl = item + this.queueControl.splice(1,lastItemIdx);
      this.size += 1;
    return this.queueControl;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue Underflow';
    }
    const lastItemIdx = this.size - 1;
    const lastItemArr = this.queueControl.splice(lastItemIdx,1);
    this.size -= 1;
    return lastItemArr[0];
  }
}
