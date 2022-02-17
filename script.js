"use strict";

console.log("1. Написать функцию copy(target, origin)");

const origin = {
    id: 1,
    email: "user@email.com",
    firstName: "Test",
    lastName: "Drive",
    age: 27
};

let target = {};

function copy(obj1, obj2) {
    for (const key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2;
}

console.log(copy(origin, target));

console.log("2. Напишите функцию, принимающую и сравнивающую два объекта.");

const firstObj = {
    id: 1,
    email: "user@email.com",
    firstName: "Test",
    lastName: "Drive",
    age: 27
};

const secondObj = {
    id: 1,
    email: "user@email.com",
    firstName: "Test",
    lastName: "Drive",
    age: 27
};

function compareObjects(obj1, obj2) {
    const firstObjectLenght = Object.keys(obj1).length;
    const secondObjectLenght = Object.keys(obj2).length;

    if (firstObjectLenght !== secondObjectLenght) {
        return false;
    }

    for (let key in obj2) {
        if (!(key in obj1) || !(obj2[key] === obj1[key])) {
            return false;
        }
    }

    return true;
}

console.log(compareObjects(firstObj, secondObj));

console.log("3. Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква.");

let string = "aaaaaabbbbbbbbccc";
let obj = {};
function countLetters(str) {
    for(let i = 0; i < str.length; i++) {
        let key = str[i];

        if(obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}

console.log(countLetters(string));
