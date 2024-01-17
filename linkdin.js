
//! onstruction of  Singly Linked List 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
// The Node class represents a node in the linked list, with data and a reference to the next node.


class LinkedList {
    constructor() {
        this.head = null;
    }
    // The LinkedList class has a head property, which is the reference to the first node.


    // Add a new node to the end of the list
    InsertAtLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // The InsertAtLast method adds a new node to the end of the list.

    display() {
        let current = this.head;
        while (current) {
            console.log("singly linked list", current.data);
            current = current.next;
        }
    }
    //The display method prints the elements of the linked list.
}

// const linkedList = new LinkedList();
// linkedList.InsertAtLast(1);
// linkedList.InsertAtLast(2);
// linkedList.InsertAtLast(3);

// linkedList.display();




//! Construction of Doubly Linked List

class DoublyNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    Inssertingdata(data) {
        let newNode = new DoublyNode(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    display() {
        let current = this.head
        while (current) {
            console.log("Doubly linked list", current.data);
            current = current.next
        }
    }
}
// let linkedListt = new DoublyLinkedList()
// linkedListt.Inssertingdata(1)
// linkedListt.Inssertingdata(2)
// linkedListt.Inssertingdata(3)

// linkedListt.display()




//! Singlyl Doubly Linked LIst

class Sdoubly {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Doubly {
    constructor() {
        this.head = null
    }
    insertdataatDoubly(data) {
        let newNode = new Sdoubly(data)
        if (!this.head) {
            this.head = newNode
            newNode.next = this.head
        } else {
            let current = this.head
            while (current.next != this.head) {
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
        }

    }
    display() {
        if (!this.head) {
            console.log("empty");
            return
        } else {
            let current = this.head
            do {
                console.log("Singlly Doubly Linked list", current.data);
                current = current.next
            } while (current != this.head);
        }
    }
}
// const circularkin = new Doubly()
// circularkin.insertdataatDoubly(1)
// circularkin.insertdataatDoubly(2)
// circularkin.insertdataatDoubly(3)
// circularkin.display()




//! array to linkedlist

class a {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class b {
    constructor() {
        this.head = null
    }
    addsingl(data) {
        let newNode = new a(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    display() {
        let current = this.head
        while (current) {
            console.log("converting array to linkedlist", current.data);
            current = current.next
        }
    }

}

function arraytolinkedlist(arr) {
    const linkedList = new b()
    for (const elements of arr) {
        linkedList.addsingl(elements)
    }
    return linkedList
}
const array = [4, 5, 6]
// const linkedlistq = arraytolinkedlist(array)
// linkedlistq.display()




// ! ADDing node at  end
class Nodeee {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class ab {
    constructor() {
        this.head = null
    }
    addingdata(data) {
        let newnode = new Nodeee(data)
        if (!this.head) {
            this.head = newnode
            return;
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newnode;
    }
    prepend(data) {
        let newNode = new Nodeee(data)
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode
        }
    }
    display() {
        let current = this.head
        let str = '';
        while (current) {
            console.log("adding node at end", current.data);
            str += current.data + ' ';
            current = current.next
        }
        console.log("total linked list", str);

    }

}
// const v = new ab()
// v.addingdata(3)
// v.addingdata(2)
// v.addingdata(5)
// v.prepend(7)
// v.display()






// ! ADDing node at  Begginig
class Nodeees {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class abc {
    constructor() {
        this.head = null
    }

    prepend(data) {
        let newNode = new Nodeees(data)
        newNode.next = this.head;
        this.head = newNode

    }
    display() {
        let current = this.head
        console.log("hello", current);
        while (current) {

            console.log("adding node at begging", current.data);
            current = current.next
        }

    }

}
// let va = new abc()

// va.prepend(9)
// va.prepend(3)
// va.display()








// ! Delete Node with the Value Specified:
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the end of the list
    addNode(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to delete a node with a specified value
    deleteNode(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current && current.value !== value) {
        prev = current;
        current = current.next;
      }
  
      if (!current) {
        // Node with the specified value not found
        return;
      }
  
      prev.next = current.next;
    }
  
    // Method to print the linked list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  
  console.log("Original linked list:");
  linkedList.printList();
  
  linkedList.deleteNode(2);
  
  console.log("\nLinked list after deleting node with value 2:");
  linkedList.printList();
  























//  class linkedlist {
//     constructor(data) {
//         this.head = null
//         this.size = 0
//     }

//     //inserting value at head position
//     insertAtHead(data) {
//         const newnode = new Node(data)
//         newnode.next = this.head
//         this.head = newnode
//         console.log("new node added");
//         this.size++
//     }

//     //inserting a value
//     insert(index, data) {
//         if (index < 0 || index > this.size) {
//             console.log("invalid index");
//             return
//         }
//         if (index == 0) {
//             this.insertAtHead(data)
//             return;
//         }

//         let newnode = new Node(data)

//         let temp = this.head
//         for (let i = 0; i < index - 1; i++) {
//             temp = temp.next
//         }

//         newnode.next = temp.next
//         temp.next = newnode

//         this.size++
//     }
//     removeAtHead() {
//         if (this.size === 0) {
//             console.log('already empty');
//         }
//         this.head = this.head.next
//     }
//     //printing of linked values
//     print() {
//         let temp = this.head
//         if (temp == null) {
//             console.log("empty");
//             return
//         }
//         while (temp != null) {
//             console.log(temp.data);
//             temp = temp.next
//         }
//     }
// }
// let list = new linkedlist()
// // console.log(list);
// // list.print();
// list.insertAtHead(43)
// list.insertAtHead(32)
// list.insertAtHead(21)
// // list.print();

// list.insert(1, 10)

// list.removeAtHead()

