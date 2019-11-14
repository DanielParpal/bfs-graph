export class Vertex {
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export class Graph {
  qtyVertices: number;
  adjList: Map<Vertex, Vertex[]>;

  constructor(qtyVertices: number) {
    this.qtyVertices = qtyVertices;
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
    const keys: Vertex[] = [...this.adjList.keys()];

    for (const key of keys) {
      let display = key.data + ' => ';

      const adjacentVertices = this.adjList.get(key);
      if (!adjacentVertices) continue;

      display += adjacentVertices.map((vertex) => {
        return vertex.data;
      }).join(', ');

      console.log(display);
    }
  }
}