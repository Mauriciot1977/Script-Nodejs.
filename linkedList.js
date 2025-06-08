// linkedList.js

function createNode(value) {
  return {
    value,
    next: null,
  };
}

let head = null;

function addNode(value) {
  const newNode = createNode(value);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function deleteNode(value) {
  if (!head) {
    console.log("La lista está vacía.");
    return;
  }

  if (head.value === value) {
    head = head.next;
    return;
  }

  let current = head;
  while (current.next && current.next.value !== value) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
  } else {
    console.log("Valor no encontrado.");
  }
}

function printList() {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Prueba
console.log("Lista vacía:");
printList();
console.log("Intentar eliminar de una lista vacía:");
deleteNode(10);
console.log("Agregar nodos:");
addNode(5);
addNode(10);
addNode(15);
printList();
console.log("Eliminar nodo con valor 10:");
deleteNode(10);
printList();
