import Graph from "./graph";

const createGraph = (): Graph<string> => {
  const graph = new Graph<string>();
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "B");
  return graph;
};

const createGraphUnvisited = (): Graph<string> => {
  const graph = new Graph<string>();
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("A", "D");
  return graph;
};

describe("Graph", () => {
  describe("addNode", () => {
    it("should add a new node to the empty graph", () => {
      const graph = new Graph<string>();
      expect(graph.addNode("A")).toBe(true);
    });

    it("should add a new node to the graph", () => {
      const graph = createGraph();
      expect(graph.addNode("E")).toBe(true);
    });

    it("should not add an known node", () => {
      const graph = createGraph();
      expect(graph.addNode("A")).toBe(false);
    });
  });

  describe("addEdge", () => {
    it("shoud add an edge between src and dst nodes", () => {
      const graph = createGraph();
      expect(graph.addEdge("D", "A")).toBe(true);
    });

    it("shoud add an edge between the same node", () => {
      const graph = createGraph();
      expect(graph.addEdge("A", "A")).toBe(true);
    });

    it("shoud not add an known edge", () => {
      const graph = createGraph();
      expect(graph.addEdge("A", "C")).toBe(false);
    });

    it("shoud not add an edge with unknown src node", () => {
      const graph = createGraph();
      expect(graph.addEdge("E", "A")).toBe(false);
    });

    it("shoud not add an edge with unknown dst node", () => {
      const graph = createGraph();
      expect(graph.addEdge("A", "E")).toBe(false);
    });

    it("shoud not add an edge with unknown src and dst nodes", () => {
      const graph = new Graph<string>();
      expect(graph.addEdge("E", "F")).toBe(false);
    });
  });

  describe("removeNode", () => {
    it("should remove a isolated node", () => {
      const graph = createGraph();
      graph.addNode("E");
      expect(graph.removeNode("E")).toBe(true);
    });

    it("should not remove an unknown node", () => {
      const graph = createGraph();
      graph.addNode("E");
      expect(graph.removeNode("E")).toBe(true);
    });

    it("should remove a node with adjacencies", () => {
      const graph = createGraph();
      expect(graph.removeNode("C")).toBe(true);
      expect(graph.removeEdge("A", "C")).toBe(false);
      expect(graph.removeEdge("C", "D")).toBe(false);
    });

    it("should not remove an unknown node", () => {
      const graph = createGraph();
      expect(graph.removeNode("E")).toBe(false);
    });
  });

  describe("removeEdge", () => {
    it("shoud remove an edge between src and dst nodes", () => {
      const graph = createGraph();
      expect(graph.removeEdge("A", "C")).toBe(true);
    });

    it("shoud not remove an unknown edge", () => {
      const graph = createGraph();
      expect(graph.removeEdge("A", "D")).toBe(false);
    });

    it("shoud not remove an edge with unknown src node", () => {
      const graph = createGraph();
      expect(graph.removeEdge("E", "A")).toBe(false);
    });

    it("shoud not remove an edge with unknown dst node", () => {
      const graph = createGraph();
      expect(graph.removeEdge("A", "E")).toBe(false);
    });

    it("shoud not remove an edge with unknown src and dst nodes", () => {
      const graph = new Graph<string>();
      expect(graph.removeEdge("E", "F")).toBe(false);
    });
  });

  describe("depthFirstSearch", () => {
    it("should perform a DFS with empty graph", () => {
      const graph = new Graph<string>();
      expect(graph.depthFirstSearch("A")).toEqual([]);
    });

    it("should perform a DFS with graph", () => {
      const graph = createGraphUnvisited();
      expect(graph.depthFirstSearch("A")).toEqual(["A", "B", "C", "D"]);
    });
  });

  describe("breadthFirstSearch", () => {
    it("should perform a BFS with empty graph", () => {
      const graph = new Graph<string>();
      expect(graph.breadthFirstSearch("A")).toEqual([]);
    });

    it("should perform a BFS with graph", () => {
      const graph = createGraphUnvisited();
      expect(graph.breadthFirstSearch("A")).toEqual(["A", "B", "D", "C"]);
    });
  });

  describe("values", () => {
    it("should return undefined with empty graph", () => {
      const graph = new Graph();
      const generator = graph.values();
      expect(generator.next().value).toBe(undefined);
    });

    it("should return values of the graph", () => {
      const graph = createGraph();
      const generator = graph.values();
      expect(generator.next().value).toEqual({ node: "A", adjacencies: ["B", "C"] });
      expect(generator.next().value).toEqual({ node: "B", adjacencies: [] });
      expect(generator.next().value).toEqual({ node: "C", adjacencies: ["D"] });
      expect(generator.next().value).toEqual({ node: "D", adjacencies: ["B"] });
    });
  });

  describe("iterator", () => {
    it("should return the array representation of an empty graph", () => {
      const graph = new Graph();
      expect([...graph]).toEqual([]);
    });

    it("should return the array representation of a graph", () => {
      const graph = createGraph();
      expect([...graph]).toEqual([
        { node: "A", adjacencies: ["B", "C"] },
        { node: "B", adjacencies: [] },
        { node: "C", adjacencies: ["D"] },
        { node: "D", adjacencies: ["B"] },
      ]);
    });
  });
});
