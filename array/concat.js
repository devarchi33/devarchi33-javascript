/**
 * Created by donghoon on 2016. 5. 21..
 */

//Array.prototype.concat();

var items = [1];

var newItem = items.concat([2, 3], [4, 5, 6], [7, [8, 9], null, "fsdfsd"], undefined);

console.log(newItem);

//practical example

var people = [
    {
        name: "Donghoon"
    },
    {
        name: "Jaeyeol"
    }
];

people.forEach(function (person) {
    console.log(person.name);
});

var people2 = [
    {
        name: "Sejong"
    },
    {
        name: "Younghoe"
    }
];

console.log("");

/**
 * concat 을 수행하면 요소가 합쳐진 새로운 배열을 리턴해 준다.
 */
people
    .concat(people2)
    .forEach(function (person) {
        console.log(person.name);
    });

// concat() 은 shallow copy 이다. Object 요소에 대해서는 origin 과 copied 모두 주소 값을 참조한다.
