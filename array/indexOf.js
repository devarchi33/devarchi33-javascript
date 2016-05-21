/**
 * Created by donghoon on 2016. 5. 21..
 */

//Array.prototype.indexOf();

var family = ["Shane", "Sally", "Isaac"];
var kittieExists = family.indexOf("Kittie") > -1;
console.log(kittieExists);
// indexOf 의 인자가 존재하면 그 index 를 반환하고 존재하지 않으면 -1 반환.

var shane = {
    name: "Shane"
};
var sally = {
    name: "Sally"
};
var isaac = {
    name: "Isaac"
};

var family2 = [shane, sally, isaac];

console.log(family2.indexOf(isaac));

// practical example

var whitelist = [".css", ".js"];

var events = [
    {
        file: "css/core.css"
    },
    {
        file: "js/app.js"
    },
    {
        file: "index.html"
    }
];

// filter 함수의 조건이 true 를 만족하는 요소로 배열의 요소를 변경함.
var filtered = events.filter(function (event) {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
});

//축약형
var filtered2 = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
console.log(filtered2);