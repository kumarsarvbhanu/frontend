// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute("href"));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type").slice(1));


// get multiple items using getelements by  classname
// const navItem = document.getElementsByClassName("nav-item");
// return HTML Elements
// console.log(navItem);
// console.log(Array.isArray(typeof navItem));



// get multiple items using queryselector all
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem[1]);


// using loops

// const navItems = document.getElementsByTagName("a");



// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItem[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// for (let navItem of navItems) {
//     // console.log(navItem[i]);
//     // const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }



// converting html collections in array
// let navItems = document.getElementsByTagName("a");

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// now we can perform any array operation on navItems
// also can use forEach() loop

// navItems.forEach(navItem)=> {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


//in nodeList we can use simple loop, for of loop, forEach loop
// let navItems = document.querySelectorAll("a");
// navItems.forEach(navItem) => {
//     navItem.style.color = "green";
// }
// console.log(navItems);


// for (let navItem of navItems) {
//     // console.log(navItem[i]);
//     // const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// const headLine = document.querySelector(".headLine");
// console.log(headLine.innerHTML);
// headLine.innerHTML = "<h1>Hello Bhanu</h1>";
// headLine.innerHTML += "<button class= \"btn\">Learn </button>";
// console.log(headLine.innerHTML);

// const sectionToDo = document.querySelector(".todo-list");
// console.log(sectionToDo.classList);
// console.log(sectionToDo.innerHTML);
// sectionToDo.innerHTML += "<li>New To Do</li>";


// sectionToDo.classList.add("bg-dark");
// sectionToDo.classList.remove("container");
// const ans = sectionToDo.classList.contains("container");
// console.log(ans);
// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title.childNodes);


// togggle will add if it doesnt contains and it will remove if it contains already
// sectionToDo.classList.toggle("bg-dark");
// sectionToDo.classList.toggle("bg-dark");
// const container = document.querySelector(".container");
// console.log(container.children);



// const header = document.querySelector("header");
// header.classList.add("bg-dark");
// console.log(header.classList);


// document.createElement()
// append
// prepend
//remove



// const newToDoItem = document.createElement("li");
// newToDoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newToDoItem);
// todoList.prepend(newToDoItem);
// console.log(newToDoItem);


// const todo1 = document.querySelector(".todo-list");
// todo1.remove();
// console.log(todo1);


// const newToDoItem = document.createElement("li");
// newToDoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newToDoItem);
// todoList.after(newToDoItem);



//elem.insertAdjacentHTML(where, html)

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Student</li>");
// todoList.insertAdjacentHTML("afterend", "<li>Teach Student</li>");
// todoList.insertAdjacentHTML("afterbegin", "<li>Teach Student</li>");
// todoList.insertAdjacentHTML("beforebegin", "<li>Teach Student</li>");
// console.log(todoList);



// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "new todo";
// ul.insertBefore(li, referenceNode);



// const
const person = function (first, last, age, gender) {

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}
const bhanu = new person("Sarvbhanu", "Kumar", 23, "Male");

document.getElementById("obj").innerHTML = "My name is " + bhanu.firstName + " " + bhanu.lastName + ". I am " + bhanu.age + "years old.";
