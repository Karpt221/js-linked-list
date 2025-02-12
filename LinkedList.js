class Node {
  constructor(nodeValue = null, nextNode = null) {
    this.value = nodeValue;
    this.next = nextNode;
    this.prev = null;
  }
}

export class LinkedList {
  #listHead = null;
  #listTail = null;
  #size = 0;

  append(value) {
    if (this.#listHead === null) {
      this.#listHead = new Node(value);
      this.#listTail = this.#listHead;
    } else {
      this.#listTail.next = new Node(value);
      this.#listTail.next.prev = this.#listTail;
      this.#listTail = this.#listTail.next;
    }
    this.#size++;
  }

  prepend(value) {
    let newNode =  new Node(value);
    newNode.next = this.#listHead;
    this.#listHead.prev = newNode;
    this.#listHead = newNode;
    this.#size++;
  }

  getSize() {
    return this.#size;
  }

  head() {
    return this.#listHead;
  }

  tail() {
    return this.#listTail;
  }

  at(index) {
    let counter = 0;
    let node = this.#listHead;

    if (node !== null) {
      while (node !== null) {
        if (index === counter) {
          return node;
        }
        node = node.next;
        counter++;
      }
      node = null;
    }
    return node;
  }

  pop() {
    if (this.#listHead !== null) {
      if (this.#size === 1) {
        this.#listHead = null;
        this.#listTail = null;
      } else {
        let node = this.#listTail.prev;
        node.next = null;
        this.#listTail = node;
      }
      this.#size--;
    }
  }

  contains(value) {
    let node = this.#listHead;

    if (node !== null) {
      while (node !== null) {
        if (value === node.value) {
          return true;
        }
        node = node.next;
      }
    }
    return false;
  }

  find(value) {
    let node = this.#listHead;
    let index = 0;
    if (node !== null) {
      while (node !== null) {
        if (value === node.value) {
          return index;
        }
        node = node.next;
        index++;
      }
    }
    return null;
  }

  toString() {
    let node = this.#listHead;
    let strNodes = '';
    if (node !== null) {
      while (node !== null) {
        strNodes = strNodes + `( ${node.value} ) <-> `;
        node = node.next;
      }
    }
    return strNodes + 'null';
  }

  insertAt(value, index) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.#size) {
      this.append(value);
    } else {
      this.insertMidIdx(value, index);
    }
  }

  insertMidIdx(value, index) {
    if (this.#listHead === null) {
      this.#listHead = new Node(value);
      this.#listTail = this.#listHead;
      return;
    }
    let newNode = new Node(value);
    let node = this.at(index);
    newNode.prev = node.prev;
    node.prev.next = newNode;
    node.prev = newNode;
    newNode.next = node;
    this.#size++;
  }

  removeAt(index = 0) {
    if (this.#listHead !== null) {
      if (index <= 0) {
        this.#listHead = this.#listHead.next;
        this.#listHead.prev = null;
        this.#size--;
      } else if (index >= this.#size - 1) {
        this.pop();
      } else {
        let node = this.at(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.#size--;
      }
    }
  }

  forEach(callback) {
    if (!arguments[0]) {
      throw new Error('Callback is required');
    }
    let node = this.#listHead;
    let prevNode = null;
    if (node !== null) {
      while (node !== null) {
        callback(node, prevNode);
        prevNode = node;
        node = node.next;
      }
    }
  }
}
