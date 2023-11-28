const { getVariableValues } = require("graphql");

//Task 1
const dataTypes = {
  String: "Some text",
  Number: 25,
  Boolean: false,
  Undefined: undefined,
  Null: null,
  Big_Int: BigInt(9007199254740995)
};

//Task 2
const secMin = 60; // seconds in a minute
const minH = 60; // minutes in an hour
const hourD = 24; // hours in a day
const dayM = 30; // days in a month.

const secH = secMin * minH
const secD = secH * hourD
const secM = secD * dayM

//Task 3
const primeNumbers = numsArr => {
    const filteredArr = numsArr.filter(number =>
        number % 3 === 0 ||
        number % 5 === 0 ||
        number % 7 === 0 ||
        number % 11 === 0 ||
        number % 13 === 0
    );

    return filteredArr;
}

const numsArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 19, 20];
console.log(primeNumbers(numsArr));

//Task 4
const triangleArea = (a, b, c) => {
    if (a + b <= c || a + c <= b || c + b <= a) {
        return 'Incorrect data';
    }

    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return s.toFixed(3);
}

const a = 3
const b = 3
const c = 4
console.log(triangleArea(a, b, c));

//Task 5
const filterMostOftenNumber = numsArr2 => {
    const countMap = new Map();

    numsArr2.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    let maxCount = 0;
    countMap.forEach((count, num) => {
        if (count > maxCount) {
            maxCount = count;
        }
    });

    const numbersToRemove = new Array();
    countMap.forEach((count, num) => {
        if (count === maxCount) {
            numbersToRemove.push(num);
        }
    });

    return numsArr2.filter(num => !numbersToRemove.includes(num));
}

// Example:
const numsArr2 = [1, 2, 3, 4, 2, 3, 2, 1, 5, 5, 5];
console.log(filterMostOftenNumber(numsArr2));
