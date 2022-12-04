console.log("Hello, World");
// let a;
// a = true;
// console.log(typeof(a));

// a = 1;
// console.log(typeof(a));
// console.log(.1 + .2);
// let b = 0.000033333333;
// console.log(b * 3);


// console.log(0.2 + 0.4);
// console.log(null === undefined);
// a = "My name is bhanu";
// console.log(a);

// a += " kumar";
// console.log(a);
// console.log(typeof(a));
// a = 'bhanu';
// console.log(typeof(a));


// a = {
//     name: {
//         first: "bhanu",
//         middle: "pratap",
//         last: "singh",
//     },
//     designation: "CEO",
//     company: "amd",
// }
// console.log(a, typeof(a));

// a = [1, 2, 3, 4, 5, 46];
// console.log(a, typeof(a));
// a = [1, "bhanu", true, false, undefined, null, 0.5, 0.3, 0.8 + 12.999, 0e45];
// console.log(typeof(a), a);
console.log(0.1 + 0.2 === 0.3);

console.log(1 + parseInt("2"));
console.log(parseFloat(4.004));
console.log(parseInt(4.004));
a = "21.2345";
console.log(parseFloat(a), a, parseInt(a), typeof(parseFloat(a)), typeof(parseFloat(a)));
a = function bhanu(p, q) {
    console.log(p + q - 10);
    return p - q;
}
console.log(typeof(a), a(4, 5.5));