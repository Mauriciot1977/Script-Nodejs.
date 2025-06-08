// nodOperations.js

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = createNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = createNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printList(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function countNodesRecursive(node) {
  if (!node) return 0;
  return 1 + countNodesRecursive(node.next);
}

// Prueba con lista de valores
const values = [10, 20, 30, 40, 50];
const linkedListHead = arrayToLinkedList(values);
console.log("Lista enlazada creada:");
printList(linkedListHead);

console.time("Conteo de nodos");
console.log("Cantidad de nodos:", countNodesRecursive(linkedListHead));
console.timeEnd("Conteo de nodos");

// Prueba con lista vacía
const emptyList = arrayToLinkedList([]);
console.log("Lista vacía:");
printList(emptyList);
console.time("Conteo de nodos vacía");
console.log("Cantidad de nodos:", countNodesRecursive(emptyList));
console.timeEnd("Conteo de nodos vacía");
