
import { pca } from "d3";

const data = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 3,
    y: 4,
  },
  {
    x: 5,
    y: 6,
  },
];

const pca = d3.pca(data);

console.log(pca);