// let firstName = 'bhanu kUMmar';
// console.log(firstName[firstName.length-1]);
// let newName = firstName.trim();
// console.log(newName);
// console.log(newName.length);

// console.log(firstName.trim());
// firstName = firstName.toUpperCase()
// console.log(firstName);
// low = firstName.toLowerCase();
// console.log(low);

// let newString = firstName.slice(10);
// console.log(newString);
    
// let age = +'23';
// let name = 'Bhanu';
// console.log(typeof (age));
// //  age = age+'';
//  console.log(age, typeof(age));

// let str1 = '21';
// let str2 = '25';
// let mystr = +str1 + +str2;
// console.log(mystr);

// let agr =23;
// let myName = 'Sarvbhanu';
// // let me = 'my name is ' + agr + ' my age is ' +myName;
// // console.log(me);
// let meIs = `my name is ${myName} and my age is ${agr}`;
// console.log(meIs);


// let a;
// console.log( typeof  a, a);
// var b;
// console.log(typeof b,b);
// const c = 2;
// console.log( typeof c,c);

// let age = 10;
// let drink = age <=9 ? 'water' : "milk";
// console.log(drink);

// let Name = 'Bhanu';
// let age = 23;
// if(Name[0] === 'B' && age >= 20){
// console.log('if');
// }
// else{
//     console.log("else");
// }

// console.log("else" ==="esle");
// let age = 20;

// let user = +prompt("enter your age");
// if(user==age1){
// console.log("hellodude");
// }
// else{
//     console.log('hi dude');
// }


// let num1 = 6;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log(num1);



// const arr = ['1', '2', '3', '4'];

// let [myvar1, myvar2, ...newarr] = arr;
// console.log(myvar1, myvar2);
// console.log(newarr);

// const person = {
//     name:'bhanu',
//     age: 23,
//     hobbies: ['cooking', 'football', 'music'],
// };
// let hobbies2= [];
// hobbies2.push(person.hobbies);
// person.gender= 'male';
// console.log(person);
// console.log(person['age']);

// const key = 'email33';
// const person = {
//     name:'bhanu',
//     age: 23,
//     'person hobbies': ['cooking', 'football', 'music'],
// };
// // console.log(person['person hobbies']);
// person[key] = 'sss57662.a@gmail.com';
// console.log(person);


// const person = {
//     name:'bhanu',
//     age: 23,
//     'person hobbies': ['cooking', 'football', 'music'],
// };

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
//     console.log(key,':', person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray(Object.keys(person));
// console.log(val);


// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// // const obj = {
// // key1 : value1,
// //     key2 : value2
// // }
// // console.log(obj);
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


// const arr1 = [1,3,4,5];
// const arr2 = [2,4,6,8];

// // const newArr = [arr1, ...arr2, 67, 98];
// // console.log(newArr);

// const newArr = [...arr1, ..."abcdefghijklmnopqrstuvwxyz",..."23459600699544333"];
// console.log(newArr);


// const obj1 = {
//     key1 : "value1",
//     key2: 'value2'
// ,}

// // console.log(obj1);
// const obj2 = {
//     key2 : "value3",
//     key1: 'value4'
// ,}
// const newobj = {...obj1, ...obj2,key42: "bhanu"};
// const object = {..."abcdefghijklmnopqrstuvwxyz"}

// console.log(newobj,object);


//  

// console.log(typeof users);
// for(let user of users){
//     console.log(user.keys);
// }

// const [{fname: user1name, userId},{gender:user3gender}] = users;
// console.log(user1name);
// console.log(userId);
// console.log(user3gender);

// function sum(a,b){
//     return a+b;
// }
// const ans = function(a,b,c){
//     return a+b+c;
// }
// const f = ans(2,3,4);
// console.log(ans(2,4,5));
// console.log(sum(3,5));

// function sum(a,b){
//    for(let i=0;i<a.length;i++){
//     if(a[i]==b)
//     return i;
//    }
//    return -1;
// }

// const a = [1,3,4,5,6,78];
// // const ans = sum(a,5)
// console.log(sum(a,5));


// const birthdaySong = function()
// {
//     console.log("hi hello");
// }
// birthdaySong();


// const happy = () =>{
//     console.log("happy birthday");
// }
// happy();
// const isEven = (number) =>{
//     return number%2==0;
// }
// console.log(isEven(6));

// const firstChar = (anyString) =>{
//     return anyString[0];
// }
// making function using arrow 
// const findTarget = (array, target) =>{
//     for(let i =0;i<array.length;i++){
//         if(array[i] == target){
//                return i;
//         }
//     }return -1;
// }

// lexial scope
// const myVar = "value1";
// function myApp(){
//     function myFunc(){
//         // const myVar = "value34";
        
    
//     const myfunc2= ()=>{

//         console.log("inside myfunc", myVar);

//     }
//     myfunc2();
// }
//     const myFunc3 = () =>{

//     }
//     console.log(myVar);
//     myFunc();

// }
// myApp();


// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     var firstName = "bhanu";
//     console.log(firstName);
// }

// {console.log(firstName);
// }


// function myApp(){
//     if(true){
//         var firstName = "bhanu";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myApp();


// function add(a,b=0){
//     // if(typeof b === 'undefined'){
//     //     b=0;
//     // }
//     return a+b;
// }
// const ans = add(5,5);
// console.log(ans);

//rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(3,4,5,6,7,8,9);



// function addAll(...numbers){
//     // console.log(numbers);
//     // console.log(Array.isArray(numbers));
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;   
//      }
//      return total;

// }
// console.log(addAll(2,3,4,5,6,7,8));

//parameter destructring
//object //react

// const person = {
//     firstName: "Bhanu",
//     gender: "male",
//     age:  50
// }
// function print(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);

// }
// function print({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);

// }
// print(person);

//callback

// function myFunc2(name){
//     console.log("inside mfunc 2");
//     console.log(`my name is ${name}`);
// }
// function myFunc(callback){
    // sql query
// console.log("hello how r u ");
// callback("hello");
// }

// myFunc(myFunc2);

// function returning function 
// function myFunc(){
//     function hello(){
//    console.log("hello");
//     }
//     return hello;
// }
// const ans = myFunc();
// ans();


// function myFunc(){
//    return function(){
//    return 'hello';
//     }
//     // return hello;
// }
// const ans = myFunc();
// console.log(ans());

//forEach()
// const numbers = [2,4,6,8,7];
// function mult(number, index){
//     console.log(`index is ${index}  number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);

// }
// mult(numbers[1] ,1);

// for(let i=0;i<numbers.length;i++){
// // console.log(i);
// mult(numbers[i], i);
// }
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })
 


// const users = [
//     {firstName: "bhanu", age :23},
//     {firstName: "bhanu1", age :26},
//     {firstName: "bhanu2", age :33},
//     {firstName: "bhanu3", age :25},
// ]


// users.forEach(function(user){
// console.log(user.firstName);
// });

// for(let user of users){
//     console.log(user.firstName);
// }
// using arrow function
// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })
  


// map method
// const numbers = [3,4,5,6,1,7,9];

// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map((number, index) => {
//     // return number*number;
//     return`index is ${index} & number is ${number*number}`;

// });
// console.log(squareNumber);


// const users = [
//     {firstName: "bhanu", age :23},
//     {firstName: "bhanu1", age :26},
//     {firstName: "bhanu2", age :33},
//     {firstName: "bhanu3", age :25},
// ]

// const userNames = users.map((user)=>{
//  return `${user.firstName}  ${user.age} `;
// });
// console.log(userNames);

// filter method (filter function)
// const numbers = [1,3,5,6,7,9,4,10 ];

// const isOdd= numbers.filter((number)=>{
//     return number%2!=0;
// });
// const eve = isOdd);
// console.log(isOdd);
// const isOdd= function(number){
//     return number%2!=0;
// }
// const eve = numbers.filter(isOdd);
// console.log(eve);


//reduce

// const numbers = [4,5,6,7,8,9,0,12];

// // sum of all the numbers
// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+ currentValue;
// });
// console.log(sum);

// const users = [
//     {productId: 1, productName: "mobile", price: 1200},
//     {productId: 2, productName: "lappie", price: 12000},
//     {productId: 3, productName: "tv", price: 100},
// ]
// const userCart = users.reduce((totalPrice, currentProduct)=>{
//   return currentProduct.price + totalPrice;
// },0);
// const arr = [1,2,3,4];
// const a = arr.reduce((x,y)=>console.log(x,y));
// console.log(userCart);


// sort 
// const array = [2,4,5,68,54,34,21,32,90,5.67,3.4,456];
// const names = ['bhanu', 'rahul', 'aa', 'bc', 'ca', 'aaaacc'];


// names.sort();
// console.log(names);
// array.sort((a,b)=>{a-b});
// console.log(array);
// a-b ----> 500
// a-b ---> positive (greater than 0) ----> b,a


// a-b ----> 500
// a-b ---> negative (less than 0) ----> a,b

// const products = [
//     {productId: 1, productName:"p1", price: 390},
//     {productId: 2, productName:"p2", price: 370},
//     {productId: 3, productName:"p3", price: 300},
//     {productId: 4, productName:"p4", price: 1300},
//     {productId: 5, productName:"p5", price: 100},
//     {productId: 6, productName:"p6", price: 30},
//     {productId: 7, productName:"p7", price: 320},
//     {productId: 8, productName:"p8", price: 310},
//     {productId: 9, productName:"p9", price: 350},
// ]

// const arranged = products.sort((a,b)=>{
//     return b.price-a.price;
// })
// console.log(products);



// find method
// const array1 = [ "hello", 'hya','dog' ,'bhanu', 'kumar'];

//  const  ans = array1.find((string)=>{
// return string.length ===3;
// });
// console.log(ans);

// const users= [
//     {userId: 1, userName:"bhanu5"},
//     {userId: 2, userName:"bhanu4"},
//     {userId: 3, userName:"bhanu3"},
//     {userId: 4, userName:"bhanu2"},
//     {userId: 5, userName:"bhanu1"},
// ]
// const ans = users.find((users)=>users.userId===3
// )
// console.log(ans);


//every method

// const numbers = [2,4,6,8,10,13,12,14];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);


// const products = [
//     {productId: 1, productName:"p1", price: 390},
//     {productId: 2, productName:"p2", price: 370},
//     {productId: 3, productName:"p3", price: 300},
//     {productId: 4, productName:"p4", price: 1300},
//     {productId: 5, productName:"p5", price: 100000},
//     {productId: 6, productName:"p6", price: 30},
//     {productId: 7, productName:"p7", price: 320},
//     {productId: 8, productName:"p8", price: 310},
//     {productId: 9, productName:"p9", price: 350},
// ]
// const ans = products.every((cartItem)=>cartItem.price<3000);
// console.log(ans);
//some method

// const numbers = [2,4,5,7,8,9];
// const ans = numbers.some((number)=>number%2===0);


// const products = [
//     {productId: 1, productName:"p1", price: 390},
//     {productId: 2, productName:"p2", price: 370},
//     {productId: 3, productName:"p3", price: 300000},
//     {productId: 4, productName:"p4", price: 1300},
//     {productId: 5, productName:"p5", price: 100000},
//     {productId: 6, productName:"p6", price: 30},
//     {productId: 7, productName:"p7", price: 320},
//     {productId: 8, productName:"p8", price: 310},
//     {productId: 9, productName:"p9", price: 350},
// ]


// const ans = products.some((product)=>product.price<200000);
// console.log(ans);

// fill method

// const arr = new Array(10).fill(-1);
// console.log(arr);

// const arr = [1,3,4,5,6,7,8,9];
// arr.fill(2,3,7);
// console.log(arr);


// splice
// const arr = ['item1', 'item2', 'i3', 'i4', 'i6'];
// delete

// arr.splice(2,4);
// const deletedItem = arr.splice(1,2);
// console.log('DELETED ITEM', deletedItem);
// //insert
// arr.splice(1, 0, 'inserted');
// console.log(arr);

// const delItem = arr.splice(1,2, "i9", "i12");
// console.log(delItem, "deleted item");
// console.log(arr);



//iterables

// const nameFirst = "bhanu";
// for(let char of nameFirst){
//   console.log(char);
// }


// array like object
// which has length property like array string

// ==>set 
// store data
// it has its own methods
//  no index based acces
// order is not guaranteed
//  only unique numbers

// const num = new Set([1,3,0,2,1,3,5]);
// console.log(num);
// const item = ['item1', 'item2', 'item3'];
// const num = new Set();
// num.add(1);
// num.add(2);
// num.add(3);
// num.add(4);
// num.add(['item4', 'item6']);
// num.add(['item4', 'item6']);

// console.log(num);
// console.log(item);

// if(num.has(5)){
//     console.log("5 is present");
// }

// else{
//     console.log("5 is  not present");

// }


// const arr = [1,2,3,4,4,5,6,6];
// const uniqe = new Set(arr);
// console.log(uniqe);
// console.log(arr);

// let length = 0;
// for(let d of uniqe){
//     length++;
// }
// console.log(length);

//map
// const person = new Map();
// person.set('firstName', 'Bhanu');
// person.set('age', '23');
// person.set(1, 'Bhanu');
// person.set([1,2,3,4,5], 'Bhanuonetwothree');
// console.log(person);

// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for(let [key, value] of person){
//     console.log(key, value);
// }

//optional chaining 
// we use ?.

// method

// function inside object
// function personInfo(){
//     console.log(`person name is ${this.firstName}`)
// }
// const person = {
//     firstName : "bhanu",
//     age: 23,
//     about:personInfo   
// }
// const person1 = {
//     firstName : "4bhanu",
//     age: 231,
//     about:personInfo   
// }
// const person3 = {
//     firstName : "3bhanu",
//     age: 234,
//     about:personInfo   
// }
// const person2 = {
//     firstName : "bhanu2",
//     age: 232,
//     about:personInfo   
// }
// person2.about();
// person1.about();
// person3.about();
// personInfo();

// console.log(window);


// function myFunc

// console.log(this);

// call apply bind
// function about(hobby, favm){
//     console.log(this.firstName, this.age, hobby, favm)
// }
// const person2 = {
//     firstName : "bhanu2",
//     age: 232,
       
// }
// const person1 = {
//     firstName : "bha2",
//     age: 23,
//     // about:function(){
//     //     console.log()
//     // }   
// }

// about.call(person2, "gutar", "happy");


// apply  


// function about(hobby, favm){
//     console.log(this.firstName, this.age, hobby, favm)
// }
// const person2 = {
//     firstName : "bhanu2",
//     age: 232,
       
// }
// const person1 = {
//     firstName : "bha2",
//     age: 23,
//     // about:function(){
//     //     console.log()
//     // }   
// }

// about.apply(person2, ["gutar", "happy"]);


// bind

// function about(hobby, favm){
//     console.log(this.firstName, this.age, hobby, favm)
// }
// const person2 = {
//     firstName : "bhanu2",
//     age: 232,
       
// }
// const person1 = {
//     firstName : "bha2",
//     age: 23,
//     // about:function(){
//     //     console.log()
//     // }   
// }

// const ans =about.bind(person2, "gutar", "happy");
// ans();

// const person1 = {
//         firstName : "bha2",
//         age: 23,
//         about: ()=>{
//             console.log(this.firstName, this.age)
//         }   
//     }
//     person1.about();
// const person2 = {
//         firstName : "bha2",
//         age: 23,
//         about (){
//             console.log(this.firstName, this.age)
//         }   
//     }
//     person2.about();




























