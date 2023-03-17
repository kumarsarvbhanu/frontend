

//arrow function syntax

{/* ()=>{

} */}

const employeeList = ['amol', 'sathish', 'suresh', 'shashank', 22];

employeeList.forEach((input, index) => {

    console.log(input, index);

})





//A function without name is called anonymous function.

const addition = (a, b) => {

    return a + b;

}

let subtraction = function (a, b) {

    return a + b;

}




    //anonymous function

    //IIFE - immediately invoke function

    (function () {

        console.log("onload");

    })();




(function () {

    console.log("onload");

})();




//Immediately invoke function.

//without function call it will trigger automatically

//you can use this function only one time.

(function () {

    alert("display");

})();





let subtraction1 = function (a, b) {

    return a + b;

}



//a,b is called function parameter

function display(a, b) {

    console.log(a, b);

}

//33,44 is called function argument

display(33, 44);
