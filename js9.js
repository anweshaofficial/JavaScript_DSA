//Djikstras 

//Shortest Path 

function Djikstra(graph, start){

    const distances = {}; 
    const visited = {}; 
    for (let node in graph){
        distances[node] = Infinity;
        visited[node] = false;
    }
    distances[start] = 0;
   
    while(true){

        let minNode = null; 
        for (let node in graph) {

            if (!visited[node] && (minNode === null || distances[node] < distances[minNode])){
                minNode = node;
            }
        }

        if (minNode === null) {
            break;
        }

        for (let neighbor in graph[minNode]) {

            let totalDistance = distances[minNode] + graph[minNode][neighbor];
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
            }
        }

        visited[minNode] = true;
    }

    return distances;
}

// Test Graph
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 3, B: 2, D: 4 },
    D: { B: 1, C: 4 }
};

// Test Dijkstra's Algorithm
console.log(Djikstra(graph, 'A')); // Should return { A: 0, B: 5, C: 3, D: 6 }

// Additional Test with a larger graph
const largerGraph = {
    A: { B: 3, C: 2, D: 5 },
    B: { A: 3, C: 4, E: 7 },
    C: { A: 2, B: 4, D: 1, E: 6 },
    D: { A: 5, C: 1, E: 2 },
    E: { B: 7, C: 6, D: 2 }
};

console.log(Djikstra(largerGraph, 'A')); // Should return { A: 0, B: 3, C: 2, D: 3, E: 5 }