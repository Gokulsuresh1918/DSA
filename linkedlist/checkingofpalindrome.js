

//! Checking if this is palindrome
class nodepal {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class linkedListpal {
    constructor() {
        this.head = null
    }
    appendpal(data) {
        let newNode = new nodepal(data)
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
const linkedListsoo = new linkedListpal()
linkedListsoo.appendpal(1)
linkedListsoo.appendpal(2)
linkedListsoo.appendpal(2)
linkedListsoo.appendpal(1)
linkedListsoo.display()
console.log(linkedListsoo.palindrome());

