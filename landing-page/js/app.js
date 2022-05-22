/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

var newUl = document.getElementById("navbar__list");                                     // declare navbar-list
var newLi = [];                                                                          //build an array
var li;         


//create 4 li in the ul #navbar-list
for (let i = 0; i <= 3; i++) {
  newLi[i] = document.createElement("li");
  li = newUl.appendChild(newLi[i]);
}

//declare li
var list = document.querySelectorAll("li");

//link the first li with the first section 
var link1 = document.createElement("a");
list[0].appendChild(link1);
var part1 = document.createTextNode("Section 1");
link1.appendChild(part1);
link1.setAttribute("href", '#section1');

//link the second li with the second h1 
var link2 = document.createElement("a");
list[1].appendChild(link2);
var part2 = document.createTextNode("Section 2");
link2.appendChild(part2);
link2.setAttribute("href", "#section2");

//link the third li with the third h1 
var link3 = document.createElement("a");
list[2].appendChild(link3);
var part3 = document.createTextNode("Section 3");
link3.appendChild(part3);
link3.setAttribute("href", "#section3");

//link the fourth li with the fourth h1 
var link4 = document.createElement("a");
list[3].appendChild(link4);
var part4 = document.createTextNode("Section 4");
link4.appendChild(part4);
link4.setAttribute("href", "#section4");

var links = [link1 , link2 , link3 , link4];

// start the scroll from the top 
window.scroll({ top: 0 });


// adding an event scroll to the function
window.addEventListener("scroll", function func(){

  // declare h2 by using a variable heading
  var heading = document.getElementsByTagName("h2");

  //for loop to select each h2 to chek if it is visible in the area between 0 and 400 then it will have an active class which changes its color if else it will still in its usual properties
  for(var head of heading){

    var change = head.getBoundingClientRect();

    if(change.top>=0 && change.top<= 400){

      head.setAttribute("class","active");

  }

  else{

    head.removeAttribute("class", "active");

  }
}
}
  )



