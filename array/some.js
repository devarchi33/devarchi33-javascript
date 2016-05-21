/**
 * Created by donghoon on 2016. 5. 22..
 */

// Array.prototype.some(); return boolean.

var items = [1, 2, 3, 4, 5];
var hasThree = items.some(val => (val === 3)); // true
var hasSix = items.some(function (val) {
    return (val === 6);
}); // false

console.log(hasThree);
console.log(hasSix);

// practical example.
var tasks = [
    {
        title: "Go Camping!",
        completed: true
    },
    {
        title: "Watch a movie",
        completed: false
    },
    {
        title: "Drink some water",
        completed: true
    }
];

// browser test.
var list = document.querySelector(".task-list");

list.classList.add(
    tasks.some(task => task.completed === false
        ? "task-list--uncompleted"
        : "task-list--completed"
    )
);

list.innerHTML = tasks
    .map(task => task.completed ? "<s>" + task.title + "</s>" : task.title)
    .map(task => "<li>" + task + "</li>")
    .join("\n");


// console test.
function addTask(taskTitle) {
    if (tasks.some(task => task.title === taskTitle)) {
        console.log("Task is duplicated.");
        return;
    }
    tasks.push({title: taskTitle, completed: false});
}

addTask("test");

console.log(tasks);