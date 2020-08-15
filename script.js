// 1 - Select the section with an id of container without using querySelector.

document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.

document.querySelector("#container");

// 3 - Select all of the list items with a class of "second".

document.querySelectorAll(".second");

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol, .third");

// 5) Give the section with an id of container the text "Hello!"

sectionContainer = document.querySelector("#container");
sectionContain.innerText = "Hello!";
