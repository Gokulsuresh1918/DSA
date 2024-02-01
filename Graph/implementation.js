class Graph {
    constructor() {
        this.adjacentlist = {}
    }
    addvertex(vertex) {
        if (!this.adjacentlist[vertex]) {
            this.adjacentlist[vertex] = new Set()
        }
    }
    addedge(ver1, ver2) {
        if (this.adjacentlist[ver1] && this.adjacentlist[ver2]) {
            this.adjacentlist[ver1].push(ver2)
            this.adjacentlist[ver2].push(ver1)
            return true
        }
        return false
    }
}
const graph = new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')

graph.addedge('A', 'B')
graph.addedge('B', 'C')