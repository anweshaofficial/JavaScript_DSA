function kosaraju(adjacencyList) {
    const stack = [];
    const visited = {};
    const components = {};

    for (const vertex in adjacencyList) {
        if (!visited[vertex]) {
            stack.push(vertex);

            while (stack.length) {
                const topVertex = stack.pop();

                visited[topVertex] = true;

                const neighbors = adjacencyList[topVertex]; // Changed variable name to avoid conflict

                for (const neighbor of neighbors) {
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
                }

                if (Object.keys(components).indexOf(topVertex) === -1) { // Check if topVertex is not already in components
                    components[topVertex] = true;
                }
            }
        }
    }

    return components;
}

const adjacencyList = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};

const stronglyConnectedComponents = kosaraju(adjacencyList);

console.log(stronglyConnectedComponents);