/**
 * Created by donghoon on 2016. 5. 21..
 */

// Array.prototype.sort
// return : Array , args : callback fnc

var items = ["shane", "isaac", "sally"];
var sortedItems = items.sort();

console.log(sortedItems);

var items2 = [23, 22, 5, 6, 5, 65, 2, 1, 8, 9, 5, 3];
var sortedItems2 = items2.sort();  // [ 1, 2, 22, 23, 3, 5, 5, 5, 6, 65, 8, 9 ]

console.log(sortedItems2);

// solution

var sortedItems3 = items2.sort((a, b) => a - b); // ascending.
var sortedItems3_1 = items2.sort(function (a, b) {
    return a - b;
});

console.log(sortedItems3); // ascending.
console.log(sortedItems3_1); // ascending.

var sortedItems4 = items2.sort((a, b) => b - a); // descending.
console.log(sortedItems4);

// practical example.

var lessons = [
    {
        title: "정기 세미나 1회",
        views: 1050
    },
    {
        title: "정기 세미나 2회",
        views: 1800
    },
    {
        title: "정기 세미나 3회",
        views: 1754
    }
];

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(lesson => "    <li>" + lesson.title + " - " + lesson.views + "/li>")
    .join("\n");

var output = "<ul>\n" + list + "\n</ul>";

console.log("List: \n", list);
console.log();
console.log(output);