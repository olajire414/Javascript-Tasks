

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;

        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;

    }

    insertAtHead(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }


    getByIndex(data) {
        if (data < 0 || data >= this.size) return null;

        let current = this.head;
        for (let i = 0; i < data; i++) {
            current = current.next;
        }
        return current;
    }

}
module.exports = {LinkedList};

