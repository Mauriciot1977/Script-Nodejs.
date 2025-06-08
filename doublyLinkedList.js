// doublyLinkedList.js

function createNode(value) {
  return {
    value,
    next: null,
    prev: null,
  };
}

let head = null;
let tail = null;

function insertAt(value) {
  const newNode = createNode(value);
  if (!head) {
    head = newNode;
    tail = newNode;
  } else {
    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
  }
}

function reverseList(startNode) {
  let current = startNode;
  let prevNode = null;

  while (current) {
    const nextNode = current.next;
    current.next = prevNode;
    current.prev = nextNode;
    prevNode = current;
    current = nextNode;
  }

  // Actualizamos head y tail
  [head, tail] = [tail, head];
}

function printList() {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Prueba con un solo nodo
insertAt(1);
console.log("Lista antes de invertir:");
printList();
reverseList(head);
console.log("Lista después de invertir (un solo nodo):");
printList();
