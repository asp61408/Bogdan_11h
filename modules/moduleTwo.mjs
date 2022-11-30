import {sum, mult as multNumber} from "./moduleOne.mjs";

const res1 = sum(10, 2);
console.log(res1);

const res2 = sum(25, 8);
console.log(res2);

console.log(multNumber(10, 2));


import {
    one as oneRen,            /* Переименовываем импортированнуб переменную */
    two
} from './moduleOne.mjs';

console.log(oneRen);
console.log(two);