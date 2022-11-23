import sum from "./moduleOne.mjs";

const res1 = sum(10, 2);

console.log(res1);

const res2 = sum(25, 8);

console.log(res2);


import {
    one,
    two
} from './moduleOne.mjs';

console.log(one);
console.log(two);