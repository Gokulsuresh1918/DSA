
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

