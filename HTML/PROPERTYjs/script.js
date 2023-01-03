const some_string = "bhanu";
console.log(some_string[1]);
some_string[1] = "kumar";
console.log(some_string[1], some_string);

const myComputer = {
    ram: '16gb',
    hard_D_T: 'ssd',
    hdc: '512gb',
    no_of_cores: 8,
}
console.log(myComputer);


myComputer.ram = '38gb';
console.log(myComputer);


const myNewComputer = myComputer;
const myFixedComputer = object.freeze({
    ram: '16gb',
    hard_D_T: 'ssd',
    hdc: '512gb',
    no_of_cores: 8,
});

console.log(myComputer, myNewComputer, myFixedComputer);
myComputer.hdc = '256gb';
myFixedComputer.hdc = '256gb';

console.log(myComputer, myNewComputer, myFixedComputer);
console.log(myComputer.hdc, myNewComputer.hdc, myFixedComputer.hdc);


let myPhone = "iPhone";
let myNewPhone = myPhone;

myPhone = "Samsung";
console.log(myPhone, myNewPhone);

object.defineProperty(myComputer, 'no_of_cores', {
    value: 4,
    writable: false
});

console.log(myComputer);
// console.log()