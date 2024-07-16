class TreeNode {
    constructor() {
        this.children = {};
        this.endofNode = false;
    }
}
class Trie {
    constructor() {
        this.root = new TreeNode();
    }
    insert(word) {
        let cur = this.root;
        for (const char of word) {
            if (!cur.children[char]) {
                cur.children[char] = new TreeNode();
            }
            cur = cur.children[char];
        }
        cur.endofNode = true;
    }
    autoComplete(word) {
        let node = this.root;
        // Traverse the trie based on the characters in the given word
        for (const char of word) {
            if (!node.children[char]) {
                // If any character is not found, 
                //return an empty list as there are no words with the given prefix
                return [];
            }
            node = node.children[char];
        }
        let list = [];
        // Collect all words starting from the current node
        this.Complete(node, word, list);
        return list;
    }
    search(word) {
        let node = this.root;
        // Traverse the trie to find the node corresponding to the last character in the word
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        // Return true if the last node marks the end of a word
        return node.endofNode;
    }

    print(node = this.root, curword = '', result = []) {
        // Recursively explore the trie, building words and collecting them when reaching the end of a word
        if (node.endofNode) {
            result.push(curword);
        }
        for (const char in node.children) {
            this.print(node.children[char], curword + char, result);
        }
        return result;
    }

    Complete(node, word, list) {
        // Recursively explore the trie, collecting words when reaching the end of a word
        if (node.endofNode) {
            list.push(word);
        }
        for (const char in node.children) {
            this.Complete(node.children[char], word + char, list);
        }
    }
}
// Example Usage:
const call = new Trie();
call.insert('gokul');
call.insert('gopal');
call.insert("app");
call.insert("apple");
call.insert("application");
call.insert("apricot");
// console.log(call.print());
let autoCompleteList = call.autoComplete("app");
console.log(autoCompleteList);
