/**
 * Created by donghoon on 2016. 5. 21..
 */

$(document).ready(function () {
    // Array.prototype.push
    // return : Array , args : String ...
    // Use : push.apply(Array, Array)

    const ex_pets = ["Cat", "Dog"];
    const wishlist = ["Hamster", "Horse", "Snake"];

    /**
     * push 는 return 값 으로 newArray 의 length 를 반환하고,  -->  원본 Array 에 추가한 후 Array.length 를 반환
     * concat 은 return 값 으로 newArray 를 반환한다.  -->  원본 Array 를 copy 한 후, copy 한 Array 에 element 를 추가.
     */
    ex_pets.push.apply(ex_pets, wishlist); // [ 'Cat', 'Dog', 'Hamster', 'Horse', 'Snake' ]
    ex_pets.push("Hamster", "Horse", "Snake"); // [ 'Cat', 'Dog', 'Hamster', 'Horse', 'Snake' ]
    ex_pets.push(wishlist); // [ 'Cat', 'Dog', [ 'Hamster', 'Horse', 'Snake' ] ]

    console.log(ex_pets);

    // practical example.
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    const list = document.querySelector("#list");

    /** ++ document.getElementById 와 document.querySelector() 의 차이.
     * jQuery 에서 document.querySelector() 에 해당하는 것은?
     */

    const pets = [];

    // raw javascript.
    button.addEventListener("click", function (event) {
        if (input.value.length > 0) {
            pets.push(input.value);
            input.value = ""; // 있으나 없으나 똑같다...
            render();
        }
    });

    /**
     * on("click", function(){}) 는 에러남...why?
     * jquery 로 작성하였을 때 동작안함...why??
     */

    // use jquery.
    // button.click(function (evt) {
    //     if (input.value.length > 0) {
    //         pets.push(input.value);
    //         input.value = "";
    //         render();
    //     }
    // });

    function render() {
        list.innerHTML = pets.map(val => '<li>' + val + '</li>').join('');
    }
});