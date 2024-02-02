class Graph {
    constructor() {
        this.adlist = new Map()
    }
    addVertex(vertex) {
        if (!this.adlist.has(vertex)) {
            this.adlist.set(vertex, new Set())
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adlist.has(vertex1)) {
            this.addvertex(vertex1)
        }
        if (!this.adlist.has(vertex2)) {
            this.addvertex(vertex2)
        }
        this.adlist.get(vertex1).add(vertex2)
        this.adlist.get(vertex2).add(vertex1)
    }
    display() {
        for (const [vertex, edges] of this.adlist) {
            console.log(vertex + ' ->' + [...edges]);
        }
    }
    hasedge(vertex1, vertex2) {
        return (
            this.adlist.has(vertex1) &&
            this.adlist.has(vertex2)) &&
            this.adlist.get(vertex1).has(vertex2) &&
            this.adlist.get(vertex2).has(vertex1)
    }
    removeedge(vertex1, vertex2) {
        if (this.adlist.has(vertex1) && this.adlist.has(vertex2)) {
            this.adlist.get(vertex1).delete(vertex2)
            this.adlist.get(vertex2).delete(vertex1)
        }
    }
    removevertex(vertex) {
        if (!this.adlist.has(vertex)) {
            return
        }
        for (const adj of this.adlist.get(vertex)) {
            this.removeedge(vertex, adj)
        }
        this.adlist.delete(vertex)
    }
    bfs(startindex) {
        const visit = new Set()
        const queue = [startindex]
        visit.add(startindex)
        while (queue.length > 0) {
            const cur = queue.shift()
            console.log(cur);
            for (const neigbour of this.adlist.get(cur)) {
                if (!visit.has(neigbour)) {
                    visit.add(neigbour)
                    queue.push(neigbour)
                }

            }
        }
    }
    dfs(startindex) {
        const visit = new Set()
        this.dfsrecursion(startindex, visit)
    }
    dfsrecursion(vertex, visit) {
        visit.add(vertex)
        console.log(vertex);
        for (let neigbour of this.adlist.get(vertex)) {
            if (!visit.has(neigbour)) {
                this.dfsrecursion(neigbour, visit)
            }
        }
    }
    
}
// Example Usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log("Graph:");
graph.display();

console.log("\nBFS Traversal starting from 'A':");
graph.bfs('A');

console.log("\nDFS Traversal starting from 'A':");
graph.dfs('A');
