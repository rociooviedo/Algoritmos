//Agregar frente
//Escribe un método que acepte un valor y cree un nuevo nodo, asígnalo al encabezado de la lista y devuelve un puntero al nuevo nodo principal.
class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }
}


//Quitar frente
//Escribe un método para eliminar el nodo principal y devolver el nuevo nodo principal de la lista. Si la lista está vacía, devuelve null.
class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if (!this.head) {
            console.log("Lista vacía: nada que eliminar")
            return null;
        } else {
            this.head = this.head.next;
        }
        return this.head;
    }
}

//Frente
//Escribe un método para devolver el valor (no el nodo) al principio (head) de la lista. Si la lista está vacía, devuelve null.