// 1 - Select the section with an id of container without using querySelector.

document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.

document.querySelector("#container");

// 3 - Select all of the list items with a class of "second".

document.querySelectorAll(".second");

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol, .third");

// 5 - Give the section with an id of container the text "Hello!"

const sectionContainer = document.querySelector("#container");
sectionContain.innerText = "Hello!";

// 6 -Add the class main to the div with a class of footer.

const footerClass = document.querySelector(".footer");
footerClass.classlist.add("main");

// 7 - Remove the class main on the div with a class of footer.

//use footerClass variable created for previous exercise

footerClass.classList.remove("main");

// 8 - Create a new li element.

const newLiElement = document.createElement("li");

// 9 - Give the li the text "four".

const newText = document.createTextNode("four");
newLiElement.appendChild(newText);

// 10 - Append the li to the ul element.

const unordList = document.querySelector("ul");
unordList.append(newLiElement);

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".

const olLiGreen = document.querySelectorAll("ol li");
for (i in olLiGreen) {
  olLiGreen[i].style.backgroundColor = "green";
}

// 12 - Remove the div with a class of footer.

const footerDiv = document.querySelector(".footer");
footerDiv.remove();
