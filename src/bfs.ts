export class Vertex {
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export class Graph {
  adjList: Map<Vertex, Vertex[]>;

  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex: Vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(node1: Vertex, node2: Vertex) {
    const adj = this.adjList.get(node1);
    if (!adj) return;

    adj.push(node2);
  }

  printGraph() {
    for (const key of this.adjList.keys()) {
      let display = key.data + ' => ';

      const adjacentVertices = this.adjList.get(key);
      if (!adjacentVertices) continue;

      display += adjacentVertices.map((vertex) => {
        return vertex.data;
      }).join(', ');

      console.log(display);
    }
  }

  bfs(start: Vertex) {
    const queue: Vertex[] = []; // will be implemented using array
    const visited: Map<Vertex, string> = new Map();
    
    for (const key of this.adjList.keys()) {
      visited.set(key, 'white');
    }

    // Enqueue and mark as visited immediately
    queue.unshift(start);
    visited.set(start, 'black');

    while(queue.length > 0) {
      const nextVertex = queue.pop();
      if (!nextVertex) return;

      console.log(nextVertex);

      const adjacentVertices = this.adjList.get(nextVertex);
      if (!adjacentVertices) return;

      for (const v of adjacentVertices) {
        const color = visited.get(v);
        if (!color) return;

        if (color === 'white') {
          queue.unshift(v);
          visited.set(v, 'black');
        }
      }
    }
  }
}




