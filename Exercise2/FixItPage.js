/// <reference path="C:\Skola\JavaScript\git\JavaScript_Lab2\Exercise2\FixIt.html" />


//For each of the following aplicable exercise below you should present a box on the page 
//with an alert that shows the result when the box is clicked!

//###Window object at page 124:###
//1. Link the script with FixIt.hmtl
//2. Add som tags that doesn't change the visual part of the paragraph.
//3. Play with the properties at page 124 in the book. 
function CreateABox(kalle) {
    var myBox = document.createElement("div");
    myBox.setAttribute("class", "box");
    var myDocument = document.getElementsByTagName("body");
    myDocument[0].appendChild(myBox);
    myBox.addEventListener('click', kalle, true);
}

CreateABox(myNewFunction);

function myNewFunction() {
    var myArray = new Array();
    myArray.push(window.screen.width);
    myArray.push(window.screen.height);
    alert(myArray);
};



//   Use properties creatively to display things at the html page
//4. Add a stylesheet that displays the changed words in fat font and in red.
//5. PLay with the Methods 
//### DOM page 126:###
//6. Play with the DOM-properties

//### String objects page 128, 129: ###

//7. Save the the text from the makeMeAnArray-paragraph into an array.
//8. Use all the string methods and propertys allong with the array

//### String objects page 132: ###
//9. check if the 4th element in the array is a number

//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down
//11. replace the 3rd word with PI then roud it to the nearest integer

//### Date object###
//12. Calculate how many days it's until your birthday and present it.
//13. Calculate how many minutes old you are and present it.


