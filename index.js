'use strict';

// const objectA = {
//     a: 10,
//     b: true
// };

// const copyOfA = objectA;

// console.log(objectA);

// copyOfA.a = 20;

// console.log(objectA);

// copyOfA.c = 'abc';

// console.log(objectA);



// Динамическая типизация

// function a() {
//     console.log('Hey there');
// }

// a();    /* Hey there */

// a = 10;   /* !!! перезаписал значение переменной, которая является функцией */

// // a();      /* !!! после перезаписи значения переменная перестала быть функцией и не вызывается */       

// console.log(a);   /* 10 */


// !!! Объявление переменных через const !!!

// const a = () => {                     /* объявление а и стрелочная функция */
//     console.log('Hey there');
// };

// a();

// // a = 10;  /* !!! Error !!! */


// const myCity = {
//     city: 'New York',
//     popular: true,
//     // county: 'USA'
// };


/* работа с объектом через точечную запись */

// console.log(myCity.city);  /* New York */

// console.log(myCity);       /* Object myCity */

// myCity.city = 'Las Vegas';   /* перезапись значения в объекте */

// console.log(myCity);

// myCity.citizens = true;

// myCity.city = '';

// delete myCity.citizens;   /* удаление свойств и их значений из объекта */



/* работа с объектом с помощью [] */

// const countyPropertyName = 'country';

// myCity[countyPropertyName] = 'USA';

// console.log(myCity);


/* Сокращенная запись объекта */

// const name = 'Alex',
//       postsQty = 47;

// const userProfile = {
//     name,           /* name: name */
//     postsQty,           /* postsQty: postsQty */
//     hasSignedAgreement: false
// };

// console.log(userProfile.name);



/* JSON   .parse  */

// const serverData = {"userId":1,"id":1,"title":"Test title","status":{"completed":false}};

// console.log(serverData);

// // const jsParseData = JSON.parse(serverData);   /* ???????? dont work */

// // console.log(jsParseData);




/* Конвертация JS Object to JSON */

// const post = {
//     post: 'My post',
//     likesQty: 5
// };

// JSON.stringify(post);


/* Convertation from JSON to JS Object */

// const post = {
//     post: 'My post',
//     likesQty: 5
// };

// JSON.parse(post);


/* Мутации в JS (object) */

/* Object.assign */

// const person = {
//     name: 'Bob',
//     age: 25
// };

// const person2 = Object.assign({}, person);

// person2.age = 26;

// console.log(person.age);
// console.log(person2.age);



/* ...(оператор разделения объекта на свойства) */

// const person = {
//     name: 'Bob',
//     age: 25
// };

// const person2 = {...person};   /* ... оператор  */

// person2.age = 26;

// console.log(person.age);
// console.log(person2.age);


/* Двойная конвертация, вложенные ссылки не сохраняются, можно изменять вложенные объекты */

// const person = {
//         name: 'Bob',
//         age: 25
// };
    
// const person2 = JSON.parse(JSON.stringify(person));/* Конверт 1:в строку(strin.),2:в объект(parse) */
    
// person2.age = 26;
    
// console.log(person.age);
// console.log(person2.age);


/* function */

// let a = 3;
// let b = 5;

// function sum(a, b) {
//     const c = a + b;
//     console.log(c);
// }

// sum(a, b);

// a = 8;
// b = 12;

// sum(a, b);


// function myFn (a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// console.dir(myFn)

// console.log(myFn(1,2))



/* Very small function */

// function myFn() {}

// myFn();



/* Передача значения по ссылке */

// const personOne = {
//     name: 'Bob',
//     age: 21
// };

// function increasePersonAge(person) {       /* функция мутирует внешний объект personOne*/
//     person.age += 1;                       /* !!!!!! ТАК ДЕЛАТЬ НЕ НАДО  !!!!!!!!*/
//     return person;
// }

// console.log(personOne.age);    /* -> 21, до вызова функции значение остается прежним */

// increasePersonAge(personOne);
// console.log(personOne.age);   /* person.age -> 22(+=1) */

// increasePersonAge(personOne);
// console.log(personOne.age);   /* -> 23 */

// increasePersonAge(personOne);
// console.log(personOne.age);   /* -> 24 */




/* Создание копии объекта, чтобы не изменять оригинальный объект */

// const personOne = {
//     name: 'Bob',
//     age: 21
// };

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person);
//     updatedPerson.age += 1;
//     return updatedPerson;
// }

// const updatedPersonOne = increasePersonAge(personOne);

// console.log(personOne.age);
// console.log(updatedPersonOne.age);




/* Callback function */

// function anotherFunction() {
//     console.log('ooooo');
// }

// function fnWithCalback(calbackFunction) {
//     calbackFunction();
// }

// fnWithCalback(anotherFunction);

// anotherFunction();     /* ?????? */



// function printMyName() {
//     console.log('Alex');
// }

// console.log('Go!');

// setTimeout(printMyName, 1000);  /* Колбэк функция(встроенная): 1 - название функции, 2 - время (милисек) */

// console.log('Gooo!');




/* Области видимости (Глобольные и Локальные) */

// let a;                       /* Глобальная */
// let b;                       /* Глобальная */

// function myFn() {
//     let b;                   /* Локальная */
//     a = true;
//     b = 10;
//     console.log(a, b);       /* => true 10 */
// }

// myFn();

// console.log(a);              /* true */
// console.log(b);              /* undefined */




/* Цепочка областей видимости */

// const a = 5;                  /* Глобальная */

// function myFn() {
//     function innerFn() {      /* Локальная переменная (функция) */
//         console.log(a);
//     }
//     innerFn();                /* Вызов функции в области видимости myFn */
//     // return innerFn;        /* Мой код, Проверка на undefined */
// }

// myFn();




/* Не объявленные переменные */

// function myFn() {
//     a = true;
//     console.log(a);
// }

// myFn();

// console.log(a);



/* работа оператора delete */

// const a = {
//     aaa: 'fff',
//     bbb: 'jjj'
// };

// delete a.aaa;

// console.log(a);



/* Унарный оператор + корвертация строки в число */

// const a = +'aaa';

// console.log(typeof a);      /* number */

// console.log(a);             /* NaN */




/* отрицательное число true */

// const a = -1;

// Boolean(a);      /* работает в консоли браузера */

// if (a == true) {
//     console.log('true');
// } else {
//     console.log('false');
// }




// console.log(!2);                /* false */
// console.log(!false);            /* true */
// console.log(!undefined);        /* true */

// console.log(!!2);                  /* true */
// console.log(!!false);              /* false */
// console.log(!!undefined);          /* false */

// const a = {};                         /* пустой объект имеет true значение */

// console.log(!!a);                     /* true(двойное отрицание, значит true) */



// let c = 1;                               /* если значение не присвоено, то ОК не будет */

// console.log(c && console.log('ok'));     /* можно применять вместо инструкции 'if(...) {... }' */




/* '...' оператор разделения объекта на свойства */

// const button = {
//     width: 200,                  /* переменная button-объект с 2мя свойствами */
//     text: 'Buy'
// };

// const redButton = {              /* новая переменная-объект */
//     ...button,                   /* добавляем новое свойство в объект с помощью ... */
//     color: 'red'
// };

// console.table(redButton);        /* вывод объекта в консоль в табличном виде */
// console.log(redButton);



/* СВОЙСТВО ПЕРЕЗАПИШЕТСЯ */

// const button = {
//     width: 200,
//     text: 'Buy',
//     color: 'black'
// };

// const redButton = {
//     ...button,  /* если св-во уже есть в объекте, а оператор ... стоит перед новым св-вом, оно перезапишется */
//     color: 'red'
// };

// console.table(redButton);


/* СВОЙСТВО НЕ ПЕРЕЗАПИШЕТСЯ */

// const button = {
//     width: 200,
//     text: 'Buy',
//     color: 'black'
// };

// const redButton = {
//     color: 'red',              /* оператор ... после нового свойства, значение не перезапишется!!! */
//     ...button
// };

// console.log(redButton);
// console.table(redButton);


/* объединение объектов с помощью ... */

// const buttonInfo = {
//     text: 'Buy'
// };

// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// };

// const button = {
//     ...buttonInfo,      /* Очередность ИМЕЕТ ЗНАЧЕНИЕ */
//     ...buttonStyle      /* если есть одинаковые св-ва, они перезапишутся !!! */
// };

// console.table(button);



/* Конкатенация строк */

// const city = 'Мончегорск';

// const myName = 'Александр';

// const myInfo = `Здравствуйте! Меня зовут ${myName} и я живу в городе ${city}`;

// console.log(myInfo);



/* Функции, функциональные выражения, стрелочные функции */

// setTimeout(function() {                    /* Анонимное функциональное выражение */
//     console.log('Отложенное сообщение');
// }, 1000);


// setTimeout(() => {                         /* Стрелочная функция */
//     console.log('Отложенное сообщение');
// }, 1000);



/* Значения параметров функции по умолчанию */

// function multByFactor(value, multiplier = 1) {
//     return value * multiplier;
// }


// console.log(multByFactor(5));
// console.log(multByFactor(10, 2));



/* Анонимная функция (функциональное выражение) */

// const multByFactor = function(value, multiplier = 1) {
//     return value * multiplier;
// };

// console.log(multByFactor(10, 2));


/* Стрелочная функция */

// const multByFactor = (value, multiplier = 1) => {
    //     return value * multiplier;
// };
    
// console.log(multByFactor(10, 2));



/* Сокращенная запись стрелочной функции  */

// const multByFactor = (value, multiplier = 1) => value * multiplier;
    
// console.log(multByFactor(10, 2));



/* Значения параметров функции по умолчанию + неявный возврат объекта */

// const newPost = (post, addedAd = Date()) => ({
//     ...post,
//     addedAd
// });

// const firstPost = {
//     id: 1,
//     author: 'Alex'
// };

// console.log(newPost(firstPost));
// console.table(newPost(firstPost));



/* Явный возврат объекта */

// const newPost = (post, addedAd = Date()) => {
//     const newObj = {
//         ...post,
//         addedAd: addedAd
//     };
//     return newObj;
// };

// const firstPost = {
//     id: 1,
//     author: 'Alex'
// };

// console.log(newPost(firstPost));
// console.table(newPost(firstPost));




/* Обработка ошибок */

// const fnWithError = () => {
//     throw new Error('Some Error');
// };

// fnWithError();                 /* Выполнение кода остановится */

// console.log('Continue...');    /* не выполнится */




/* Try/Catch для обработки ошибок */

// const fnWithError = () => {
//     throw new Error('Some error');
// };

// try {
//     fnWithError();                 /* Вызов функции в try */
// } catch (error) {
//     console.error(error);          /* Пойманая ошибка */
//     console.log(error.message);    /* Сообщение 'Some error' */
// }

// console.log('Continue...');        /* Код выполнится */



/* Выражения и Инструкции */

// function myFn(a) {
//     console.log(a);     /* Выражение-Инструкция */
// }

// const b = true;         /* Выражение */
// let c = 10;             /* Выражение */

// myFn(2 + 3);             /* Выражение */
// myFn(b);                 /* Выражение */
// myFn(c = c + 1);         /* Выражение */
// // myFn(c = c + 1;)     /* Инструкция, будет ошибка */
// // myFn(let d)          /* Инструкция, будет ошибка */




/* Array */

// const myArray = [1, 2, 3];            /* Creation Array */
// console.log(myArray);

// const myArray2 = new Array(1, 2, 3);  /* Creation Array */
// console.log(myArray2);

// if (myArray === myArray2) {            /* == & === */
//     console.log('ok');                 /* !ok */
// } else {
//     console.log('fuck');               /* fuck */
// }

// console.log(typeof(myArray));          /* Object */
// console.log(typeof(myArray2));        /* Object */



/* push */

// const myArray = [1, 2, 3, 4];

// // myArray[myArray.length] = 5;

// // console.log(myArray);

// /* добавление в массив значений (цифры по порядку) */

// for (let i = myArray.length; i <= 10; i++) {
//     myArray.push(i + 1);
// }

// console.log(myArray);

/* [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
] */



/* pop */

// const myArray = [1, 2, 3];

// myArray.pop();                         /* удаляет последний элемент массива */
// console.log(myArray);

// const removeElement = myArray.pop();  /* удаленный элемент в переменную */

// console.log(removeElement);          /* 2 удаленный из массива элемент */




/* forEach */

// const myArray = [1, 2, 3, 10];

// console.log(myArray);                         /* [ 1, 2, 3, 10 ] */

// myArray.forEach(el => console.log(el * 2));   /* - (Сокращенная запись, стрелочная функция)  => 2 / 4 / 6 / 20 */

// console.log(myArray);                         /* [ 1, 2, 3, 10 ] */



/* map */

// const myArray = [1, 2, 3];

// console.log(myArray);                                /* [1, 2, 3] */

// const newArray = myArray.map(el => el * 3);          /* Creation new array, сокращенная запись стрелочной функции */

// console.log(newArray);                               /* [3, 6, 9] */
// console.log(myArray);                                /* [1, 2, 3] */



/* явный возврат с return */

// const myArray = [1, 2, 3];

// console.log(myArray);                                /* [1, 2, 3] */

// const newArray = myArray.map((el) => {
//     return el * 3;
// });                                              /* Creation new array, НЕ сокращенная запись стрелочной функции */

// console.log(newArray);                               /* [3, 6, 9] */
// console.log(myArray);                                /* [1, 2, 3] */




/* функциональное выражение */

// const myArray = [1, 2, 3];

// console.log(myArray);                                /* [1, 2, 3] */

// const newArray = myArray.map(function(el) {          /* Creation new array, функциональное выражение */
//     return el * 3;
// });                                                 

// console.log(newArray);                               /* [3, 6, 9] */
// console.log(myArray);                                /* [1, 2, 3] */




/* Деструктуризация объекта */

// const userProfile = {
//     name: 'Alex',
//     age: 47,
//     country: 'Russia'
// };

// const {name, age} = userProfile;     /* Объявление переменных */
// const {country} = userProfile;       /* и присвоение значений из объекта */

// console.log(name);                   /* Alex */
// console.log(age);                    /* 47 */
// console.log(country);                /* Russia */




/* Деструктуризация массива */

// const fruits = ['apple', 'banana'];

// const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne);
// console.log(fruitTwo);




/* Деструктуризация в функциях (параметры) */

// const userProfile = {
//     name: 'Alex',
//     commentsQty: 23,               /* if commentsQty: 0 -- // User Alex has no comments */
//     hasSignedAgreement: false
// };

// const userInfo = ({name, commentsQty}) => {       /* Стрел.функция с деструктуризацией в параметрах */
//     if(!commentsQty) {
//         return `User ${name} has no comments`;
//     }
//     return `User ${name} has ${commentsQty} comments`;
// };

// console.log(userInfo(userProfile));    /* User Alex has 23 comments */




/* Условные операторы */

// let a = 10;

// if (a > 5) {
//     a += 10;
// }

// console.log(a);


// const person = {
//     age: 20
// };

// console.log(person);             /* { age: 20 } */

// if (!person.user) {              /* Проверка наличия и true значения в объекте */
//     person.user = 'Alex';        /* добавление свойства в объект */
//     console.log('dont name');    /* Если нет свойства, напечатает */
// }

// console.log(person);



/* if else */

// const person = {
//     age: 20
// };

// console.log(person);             /* { age: 20 } */

// if (!person.user) {                                   /* Проверка наличия и true значения в объекте */
//     console.log('Имя не указано, сейчас добавим');    /* Если нет свойства, напечатает */
//     person.user = 'Alex';                             /* добавление свойства в объект */
// } else {                                              /* Если есть свойство в объекте, выполнится else */
//     console.log(`Привет, ${person.user}!`);
// }

// console.log(person);



// let a = 10;

// if (a > 10) {
//     a += 10;                  
// } else {
//     console.log('smale');    /* инструкция выполнится */
// }

// console.log(a);             /* 10 */




// const age = 25;

// /* if else */

// if (age > 18) {
//     console.log('Is adult');
// } else if (age >= 12) {
//     console.log('Is teenage');
// } else {
//     console.log('Is child');
// }


// /* Without if else */

// if (age >= 18) {
//     console.log('Is adult');
// }
// if (age >= 12 && age < 18) {
//     console.log('Is teenage');
// }
// if (age < 12) {
//     console.log('Is child');
// }




/* Использование if в функциях */

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {   /* Проверка на тип 'number' */
//         return 'Argument is not a number';
//     }
//     if (a <= 0 || b <= 0) {                    /* Проверка на положительное число */
//         return 'Numbers are not positive';
//     }
//     return a + b;
// };

// console.log(sumPositiveNumbers(5, true));     /* => Argument is not a number */
// console.log(sumPositiveNumbers(5, -7));       /* => Numbers are not positive */
// console.log(sumPositiveNumbers(5, 7));        /* => 12 */




/* Switch */

// const month = 12;

// switch (month) {
//     case 12:
//         console.log('December');     /* if month = 12 */
//         break;
//     case 1:
//         console.log('January');      /* if month = 1 */
//         break;
//     case 2:
//         console.log('February');     /* if month = 2 */
//         break;
//     default:
//         console.log('It is not winter a month');  /* if month = 3, 4, 5, 6, 7, 8, 9, 10, 11 */
// }




// /* Тернарный оператор */

// const a = 10;

// console.log(a >= 5 ? a + 5 : a - 5);        /* => 15 */



/* Тернарный оператор */

// const value = 0;               /* 0 - false значение, если > 0, то вернет true */

// value
//     ? console.log('True')
//     : console.log('False');



// let value = 11;

// console.log(value >= 0 ? value : -value);    /* => 11 */

// value = -5;

// const res = value >= 0 ? value : -value;     /* присваивание значения от выражения (тернарный оператор) */

// console.log(res);                            /* => 5 */




/* Перебор массива, цикл for */

// const myArray = [true, 'abc', 10];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }



/* Перебор массива с помощью forEach */

// const myArray = [true, 'abc', 10];

// myArray.forEach(el => console.log(el));




// const myArray = [true, 'abc', 10];

// myArray.forEach((element, index) => {
//     console.log(element, index);
// });

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const myObj2 = {
//     ...myObj,
//     aa: 4
// };

// console.log(myObj2);




/* while */

// let i = 0;

// while (i < 5) {
//     console.log(i);      /* от 0 до 4 */
//     i++;
// }


// let i = 10;

// while (i < 5) {
//     console.log(i);         /* Цикл while не сработает */
//     i++;
// }


/* do while */

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);         /* от 0 до 4 */


// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);         /* => 10 */





// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// for (const key in myObj) {
//     console.log(key, myObj[key]);
// }
/* =>
a 1
b 2
c 3
 */


/* Object.keys .forEach */

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// Object.keys(myObj).forEach(key => {
//     console.log(key, myObj[key]);
// });

/* 
a 1
b 2
c 3
 */


/* Object.value .forEach */

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// Object.values(myObj).forEach(value => {
//     console.log(value);
// });



/* for in для массивов */

// const myArray = [true, 10, 'abc'];

// for (const key in myArray) {
//     console.log(key, myArray[key]);    /* 0 true  1 10  2 abc */
// }

// console.log(myArray);                 /* [true, 10, 'abc'] */


// myArray.forEach(el => console.log(el));  /* forEach родной метод для массивов !!! */
/* =>
true
10
abc
 */



/* for of */

// const str = 'string';

// for (const el of str) {
//     console.log(el);
// }