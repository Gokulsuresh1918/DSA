class Graph {
    constructor() {
        this.adList = new Map();
    }
    // Adds a new vertex to the graph
    addVertex(vertex) {
        if (!this.adList.has(vertex)) {
            this.adList.set(vertex, new Set());
        }
    }
    // Adds an undirected edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adList.get(vertex1).add(vertex2);
        this.adList.get(vertex2).add(vertex1);
    }
    // Displays the vertices and their adjacent vertices
    display() {
        for (let [vertex, edges] of this.adList) {
            console.log(vertex + " -> " + [...edges]);
        }
    }
    // Checks if there is an edge between two vertices
    hasEdge(vertex1, vertex2) {
        return (
            this.adList.has(vertex1) &&
            this.adList.has(vertex2) &&
            this.adList.get(vertex1).has(vertex2) &&
            this.adList.get(vertex2).has(vertex1)
        );
    }
    // Removes an undirected edge between two vertices
    removeEdge(vertex1, vertex2) {  
        if (this.adList.has(vertex1) && this.adList.has(vertex2)) {
            this.adList.get(vertex1).delete(vertex2);
            this.adList.get(vertex2).delete(vertex1);
        }
    }
    // Removes a vertex and its associated edges from the graph
    removeVertex(vertex) {
        if (!this.adList.has(vertex)) {
            return;
        }
        for (let adjacentVertex of this.adList.get(vertex)) {
            this.removeEdge(vertex, adjacentVertex);
        }
        this.adList.delete(vertex);
    }
    // Breadth-First Search (BFS) traversal of the graph
    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);

            for (let neighbor of this.adList.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    // Depth-First Search (DFS) traversal of the graph
    dfs(startVertex) {
        const visited = new Set();
        this.dfsRecursive(startVertex, visited);
    }
    dfsRecursive(vertex, visited) {
        visited.add(vertex);
        console.log(vertex);
        for (let neighbor of this.adList.get(vertex)) {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
    hasCycle(vertex, visited = new Set(), parent = null) {
		visited.add(vertex);
	
		for (let ele of this.adjacencyList.get(vertex)) {
		  if (!visited.has(ele)) {
			if (this.hasCycle(ele, visited, vertex)) {
			  return true;
			}
		  } else if (ele !== parent) {
			return true;
		  }
		}
	
		return false;
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
