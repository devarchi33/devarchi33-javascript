/**
 * Created by donghoon on 2016. 5. 21..
 */

//Array.prototype.join();

var name = ["Donghoon", "Jaeyeol", "Sejong"];

// 배열의 두 요소를 합쳐서 출력하기.

// first step
console.log(name[0] + " " + name[1]);  //확장성 과 변경에 취약하다...

// second step
console.log(name.join()); //default arg: ,
console.log(name.join(" ")); // 인자로 구분지를 넣어 준다. 배열의 변경에 신경쓰지 않아도 됨...

// practical example1

// console 파라미터로 전달받은 문자 와 조건의 맞으면 join() 수행.
var help = [
    'Usage',
    '   foo-app <input>'
];

if (process.argv[2] === 'help') {
    console.log(help.join('\n'));
}

// practical example2

// name 을 첫 번째 문자만 대문자로 바꾸기.
var name = "donghoon lee";

// bad case 문자열 전체가 대문자로 바뀐다.
var upperName = name.toUpperCase();
console.log(upperName);

// good case
var upper = name.split(" ")
    .map(function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    })
    .join();

// good case 와 동일 map 축약형 ECMAScript6 버전을 적용해야 '=>' 을 사용할 수 있음.
var upper2 = name.split(" ")    //['donghoon','lee']
    .map(name => name.charAt(0).toUpperCase() + name.slice(1))  //['Donghoon', 'Lee']
    .join();

console.log(upper);
console.log(upper2);
