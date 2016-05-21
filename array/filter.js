/**
 * Created by donghoon on 2016. 5. 22..
 */

// Array.prototype.filter(); return Array Object.

var list = [1, 2, 3, 4, 5];
var newList = list.filter(x => x > 3);
var newList_1 = list.filter(function (val) {
    return val > 3;
});

console.log(list);
console.log(newList);
console.log(newList_1);

// practical example.

var people = [
    {
        name: "Shane",
        pets: ["", ""]
    },
    {
        name: "Sally",
        pets: [""]
    },
    {
        name: "Isaac",
        pets: []
    }
];

var filered = people.filter(person => person.pets.length);

console.log(filered);

// practical example2

var lessons = [
    {
        title: "Javascript Array in depth - bind",
        views: 902,
        tags: ["array", "bind"]
    },
    {
        title: "Javascript Array in depth - concat",
        views: 1022,
        tags: ["array", "concat"]
    },
    {
        title: "Javascript Array in depth - some",
        views: 1202,
        tags: ["array", "some"]
    },
    {
        title: "Javascript Array in depth - map",
        views: 1602,
        tags: ["function", "some"]
    }
];

var minView = 1000;
var searchTerm = "array";

var filteredLessons = lessons
    .filter(lesson => lesson.tags.indexOf(searchTerm) > -1)
    .filter(lesson => lesson.views > minView)
    .sort((lesson1, lesson2) => lesson2.views - lesson1.views)
    .map(lesson => "    <li>" + lesson.title + " - " + lesson.views + "</li>")
    .join("\n");

console.log("<ul>\n" + filteredLessons + "\n</ul>");

