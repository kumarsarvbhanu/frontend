// const para = document.querySelector("p");
// // console.log(para.innerHTML);
// para.innerHTML = "this is my new experience to js and im really enjoying it.";

// console.log(para.innerHTML.slice(4));

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);
// console.log(headElementNode.parentNode);
//

// sibling
// console.log(headElementNode.nextSibling.nextSibling);

// const cont = document.querySelector(".cont");
// console.log(cont.children);


// setInterval(interval, 1000);
// // const myInterval = document.querySelector("root");
// const myInterval = setInterval(interval, 3000);
// // clearInterval
// clearInterval(myInterval);
// function interval() {
//     document.getElementById("root").innerHTML += "bhanu";

// }
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("root").innerHTML = date.toLocaleTimeString();
}

function myStop() {
    clearInterval(myInterval);
}