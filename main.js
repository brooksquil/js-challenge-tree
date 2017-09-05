console.log("does this work?");

//connect to DOM
let height = document.getElementById("heightInput");
let character = document.getElementById("charInput");
let button = document.getElementById("growBtn");
// array and object to be objects within the array
let tree = [];
let obj = {};

//event listener on button
button.addEventListener("click", function() {
    //alerts if either field empty
    if (height.value === "" || character.value === "") {
        alert("Please enter values in both fields");
    } else {
        //name object values
        obj.tall = height.value;
        obj.char = character.value;
        //call grow function
        growYourTree(obj);
    }
})


function growYourTree(obj) {
    //loop over height object
    for (var i = 0; i < obj.tall; i++) {
        //name the indexes of array as the charcter object
        tree[i] = obj.char;
        //display in console: concat with space, repeat array of charcters with end at chosen height.
        console.log(" ".repeat(obj.tall - i) + tree[i].repeat(i + 1) + tree[i].repeat(i));
    }
}