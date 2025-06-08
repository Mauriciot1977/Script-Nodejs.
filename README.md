# Script-Nodejs.
APLICACIONES MOVILES
# Estructuras de Datos en JavaScript para Node.js

Este proyecto contiene tres scripts que implementan estructuras de datos básicas usando JavaScript para ser ejecutados con Node.js. Cada script es independiente y debe ejecutarse con el comando `node nombreDelArchivo.js` desde la consola.

---

## 📄 1. linkedList.js

### Funciones principales:
- `addNode(valor)`: Agrega un nodo con el valor especificado al final de la lista.
- `deleteNode(valor)`: Elimina el primer nodo que contenga el valor especificado.
- `printList()`: Imprime todos los valores de la lista enlazada simple.

### Instrucciones de ejecución:
```bash
node linkedList.js
```

### Ejemplo de uso esperado:
```
➡ Intentar eliminar de una lista vacía:
La lista está vacía. No se puede eliminar.
➡ Agregando nodos: 5, 10, 15
➡ Lista actual:
5
10
15
➡ Eliminando el nodo con valor 10:
➡ Lista después de eliminar:
5
15
```

---

## 📄 2. doublyLinkedList.js

### Funciones principales:
- `insertAt(valor)`: Inserta un nodo con el valor dado al final de la lista doblemente enlazada.
- `reverseList(nodoInicial)`: Recorre e imprime los nodos en orden inverso desde el nodo final.

### Instrucciones de ejecución:
```bash
node doublyLinkedList.js
```

### Ejemplo de uso esperado:
```
➡ Insertando nodos: 1, 2, 3
➡ Lista en orden directo:
1
2
3
➡ Lista en orden inverso:
3
2
1
```

---

## 📄 3. nodOperations.js

### Funciones principales:
- `arrayToLinkedList(array)`: Convierte un arreglo de valores en una lista enlazada.
- `printList(nodo)`: Imprime todos los nodos de la lista enlazada.
- `countNodesRecursive(nodo)`: Cuenta el número de nodos de forma recursiva.

### Instrucciones de ejecución:
```bash
node nodOperations.js
```

### Ejemplo de uso esperado:
```
➡ Creando lista a partir de: [1, 2, 3, 4, 5]
➡ Lista creada:
1
2
3
4
5
➡ Contando nodos recursivamente...
Tiempo: X ms
Total de nodos: 5

➡ Contando nodos en lista vacía...
La lista está vacía.
```

---

## Requisitos:
- Tener instalado Node.js, tal como se indica en las guias y seguir los pasos sugeridos por el docente
- Abrir consola en la carpeta que contiene los scripts
- Ejecutar cada script con `node nombreDelArchivo.js`
