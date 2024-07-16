class hashtable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const samekey = bucket.find(item => item[0] === key)
            if (samekey) {
                samekey[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const samekey = bucket.find(item => item[0] === key)
            if (samekey) {
                return samekey[1]
            }
            return undefined
        }
    }
    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if (bucket) {
            const samekey = bucket.find(item => item[0] === key)
            if (samekey) {
                bucket.splice(bucket.indexOf(samekey), 1)
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}
const table = new hashtable(30)
table.set('name', 'gokul')
table.set('age', '22')
table.display()
console.log(table.get('name'));
// table.set('mane','samad')
table.set('mane','aswin')
// table.remove('name')
table.display()