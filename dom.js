//parent

let h3 = document.querySelector("h3");
console.dir(h3);
let parent = h3.parentElement;
console.log(parent);


let h1 = document.querySelector("h1");
console.dir(h1);
let grandparent = h1.parentElement.parentElement;
console.log(grandparent);

//prevsibling

let prevsb = h1.previousElementSibling;
console.log(prevsb);

//nextsibling

let nextsb = h1.nextElementSibling;
console.log(nextsb);

let nextsb1 = h1.parentElement.nextElementSibling;
console.log(nextsb1);

//child

let head = document.querySelector("header");
console.log(head);
let child = head.children;
console.log(child);

//add element using str

let ul = document.querySelector("ul");
let str = ul.innerHTML;
console.log(str);
str += '<li class= "liststream">AI</li>';
ul.innerHTML=str;
console.log(str);

//create element

let li = document.createElement("li");
console.log(li);
li.innerText="Digital Marketing";


//append

ul.append(li);

//prepand

ul.prepend(li);

//append child

// ul.append("embeded");
// ul.appendChild("hello");
// ul.appendChild("<li> hello </li>"); error

ul.appendChild(li);