class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        for (let i = 0; i < word.length; i++) {
            let currentNode = this.root;
            for (let j = i; j < word.length; j++) {
                const char = word[j];
                if (!currentNode.children[char]) {
                    currentNode.children[char] = new TrieNode();
                }
                currentNode = currentNode.children[char];
            }
            currentNode.isEndOfWord = true;
        }
    }

    search(suffix) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }
}

// Example usage:
const suffixTrie = new SuffixTrie();
suffixTrie.insert("banana");

console.log(suffixTrie.search("ana")); // true
console.log(suffixTrie.search("xyz")); // false