class node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        let newNode = new node(data)
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
    palindrome() {
        let fast = this.head
        let slow = this.head
        let stack = []
        while (fast && fast.next) {
            stack.push(slow.data)
            slow = slow.next
            fast = fast.next.next
        }
        // If the linked list has an odd number of elements, move the slow pointer one step further
        if (fast) {
            slow = slow.next;
        }
        while (slow) {
            let check = stack.pop()
            if (check !== slow.data) {
                return false
            }
            slow = slow.next
        }

        return true

    }
    display() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}
const linkedLists = new linkedList()
linkedLists.append(1)
linkedLists.append(2)
linkedLists.append(2)
linkedLists.append(1)
linkedLists.display()
console.log(linkedLists.palindrome());