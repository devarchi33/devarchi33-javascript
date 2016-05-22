/**
 * Created by donghoon on 2016. 5. 21..
 */

// Array.prototype.slice
// slice() is shallow copy.
// return : Array , args : start index, end index

var sally = {
    name: "sally"
};

var arr = [1, 2, 3, 4, sally];
var copy = arr.slice();

sally.name = "Tom";

console.log(arr);
console.log(copy);

// practical example.
var person = {
    name: "shane-osbourne"
};

var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';

var sections = input.split("|").map(val => val.trim()); // ['name', 'deslugify', 'touppercase']
var ref = person[sections[0]];

/**
 * Array.reduce(callbackFnc(total[required], currentVal[required], currentIndex[optional], arr[optional]), initialVal);
 * total : reduce callbackFnc 의 수행 결과 또는 초기 값.
 * currentVal : 배열의 현재 요소의 값.
 */

// 축약형.
// var output = sections
//     .slice(1)  // ['deslugify', 'uppercase']
//     .reduce((prev, next) => {
//         if (filters[next]) {
//             return filters[next].call(null, prev);  // 함수 호출, prev 는 함수의 인자.
//         }
//         return prev;
//     }, ref);

var output = sections
    .slice(1)
    .reduce(function (prev, next) {
        if (filters[next]) {
            return filters[next].call(null, prev); // prev 에 할당되어 reduce 재실행.
        }

        return prev;
    }, ref);
console.log("secrions: ", sections);
console.log("sections[0]: ", sections[0]); // sections[0] === 'name'
console.log("sections.slice(1): ", sections.slice(1));
console.log("ref: ", ref);
console.log("filters['uppercase']: ", filters['uppercase']);
console.log("output: ", output);
