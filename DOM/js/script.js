// @ts-nocheck
const docElements = document.body;
//child notes
console.log(docElements.childNodes);
//children
console.log(docElements.children);
//first children
console.log(docElements.children[0]);
console.log(docElements.firstChild);
console.log(docElements.firstElementChild);
//first children
console.log(docElements.lastChild);
console.log(docElements.lastElementChild);

//ul s elements
const ul_data = docElements.children[1].firstElementChild;
ul_data.style = "background-color:black";
//ul s first elements
console.log(ul_data.firstElementChild.textContent);
ul_data.firstElementChild.style = "color:grey";
//ul s first elements's sibling
console.log(ul_data.firstElementChild.nextElementSibling.textContent);
ul_data.firstElementChild.nextElementSibling.style =
  "color:green; font-size:20px";
//ul s last elements's sibling
console.log(ul_data.lastElementChild.previousElementSibling.textContent);
ul_data.lastElementChild.previousElementSibling.style = "color:blue";
//ul s last elements
console.log(ul_data.lastElementChild.textContent);
ul_data.lastElementChild.style = "color:red";
const listItem = document.getElementsByClassName("list-item");

// console.log(listItem)
//element functioning
//user define
// const getE = element.getAttribute('class');
// const set = element.setAttribute('class', 'data');
// console.log(getE)
// console.log(element.removeAttribute('class'))
// console.log(element.getAttribute('class'))
// console.log(element.hasAttribute('class'))
// console.log(element.attributes)
//parent element
// const pElement=listItem[0].parentElement;
// console.log(pElement)
var body = document.body;
var fst = document.body.children[0];

//create text node
//var text = document.createTextNode('Allah Hafiz');
//create element node div
var newDiv = document.createElement("div");
//create another element node h1
// var h1 = document.createElement('h1');
//add Text node in element created h1
// h1.appendChild(text);
//add h1 element node in element created div
//   newDiv.appendChild(h1);
//add h1 element newDiv in body
// body.append(newDiv)
// body.after(newDiv)
// body.before(newDiv)
// fst.after(newDiv)
// fst.before(newDiv)
// newDiv.remove();
// innerHTML
// newDiv.innerText = 'Amad Irfan khan';
newDiv.innerHTML = `<h1 id="element" class="AI">The End</h1>`;
body.append(newDiv);
console.log(element);
console.log(body.lastChild);
