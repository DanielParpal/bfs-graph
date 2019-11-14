import React from 'react';
import {Vertex, Graph} from './bfs';

const App: React.FC = () => {
  return (
    <p>hello</p>
  );
}

export default App;

const v1 = new Vertex(1);
const v2 = new Vertex(2);
const v3 = new Vertex(3);
const v4 = new Vertex(4);
const v5 = new Vertex(5);

const g = new Graph();
g.addVertex(v1);
g.addVertex(v2);
g.addVertex(v3);
g.addVertex(v4);
g.addVertex(v5);

g.addEdge(v1, v2);
g.addEdge(v1, v3);
g.addEdge(v2, v3);
g.addEdge(v2, v5);
g.addEdge(v3, v4);
g.addEdge(v3, v5);
g.addEdge(v4, v5);

g.printGraph();
g.bfs(v1);
