class Node {
  constructor(nodeValue = null, nextNode = null) {
    this.value = nodeValue;
    this.next = nextNode;
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
      this.#listTail = this.#listTail.next;
    }
    this.#size++;
  }

  prepend(value) {
    this.#listHead = new Node(value, this.#listHead);
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
    let node = this.#listHead;
    if (node !== null) {
      if (this.#size === 1) {
        this.#listHead = null;
        this.#listTail = null;
      } else {
        while (node.next.next !== null) {
          node = node.next;
        }
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
        strNodes = strNodes + `( ${node.value} ) -> `;
        node = node.next;
      }
    }
    return strNodes + 'null';
  }

  insertAt(value, index = 0) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.#size) {
      this.append(value);
    } else {
      this.insertMidIdx(value, index);
    }
  }

  insertMidIdx(value, index = 0) {
    if (this.#listHead === null) {
      this.#listHead = new Node(value);
      return;
    }
    let node = this.#listHead;
    node = this.at(index - 1);
    let newNode = new Node(value, node.next);
    node.next = newNode;
    this.#size++;
  }

  removeAt(index = 0) {
    if (this.#listHead !== null) {
      if (index <= 0) {
        this.#listHead = this.#listHead.next;
        this.#size--;
      } else if (index >= this.#size - 1) {
        this.pop();
      } else {
        let node = this.at(index - 1);
        node.next = node.next.next;
        this.#size--;
      }
    }
  }

  forEach(callback) {
    if (!arguments[0]) {
      throw new Error('Callback is required');
    }
    let node = this.#listHead;
    if (node !== null) {
      while (node !== null) {
        callback(node);
        node = node.next;
      }
    }
  }
}
