
//!LINKED LIST
{{
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class linkedlist {
    constructor(data) {
        this.head = null
        this.size = 0
    }

    //inserting value at head position
    insertAtHead(data) {
        const newnode = new Node(data)
        newnode.next = this.head
        this.head = newnode
        console.log("new node added");
        this.size++
    }

    //inserting a value
    insert(index, data) {
        if (index < 0 || index > this.size) {
            console.log("invalid index");
            return
        }
        if (index == 0) {
            this.insertAtHead(data)
            return;
        }

        let newnode = new Node(data)

        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }

        newnode.next = temp.next
        temp.next = newnode

        this.size++
    }
    removeAtHead() {
        if (this.size === 0) {
            console.log('already empty');
        }
        this.head = this.head.next
    }
    //printing of linked values
    print() {
        let temp = this.head
        if (temp == null) {
            console.log("empty");
            return
        }
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }
    }
}
let list = new linkedlist()
// console.log(list);
// list.print();
list.insertAtHead(43)
list.insertAtHead(32)
list.insertAtHead(21)
// list.print();

list.insert(1, 10)

list.removeAtHead()

list.print();  
}}
