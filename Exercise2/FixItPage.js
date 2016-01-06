/// <reference path="C:\Skola\JavaScript\git\JavaScript_Lab2\Exercise2\FixIt.html" />


//For each of the following aplicable exercise below you should present a box on the page 
//with an alert that shows the result when the box is clicked!

//###Window object at page 124:###
//1. Link the script with FixIt.hmtl
//2. Add som tags that doesn't change the visual part of the paragraph.
//3. Play with the properties at page 124 in the book. 
function CreateABox(kalle) {
    var myBox = document.createElement("div");
    myBox.setAttribute("class", "box1");
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

fixSpan();

//   Use properties creatively to display things at the html page
//4. Add a stylesheet that displays the changed words in fat font and in red.
function fixSpan() {

    var kalle = document.getElementsByTagName("span");
    for (var i = 0; i < kalle.length; i++) {
        kalle[i].style.color = "red";
        kalle[i].style.fontWeight = "bold";
    }   
};

CreateABox(myNewFunction2);

//5. PLay with the Methods 
function CreateABox2(kalle) {
    var myBox = document.createElement("div");
    myBox.setAttribute("class", "box2");
    var myDocument = document.getElementsByTagName("body");
    myDocument[0].appendChild(myBox);
    myBox.addEventListener('click', kalle, true);
}


function myNewFunction2() {    
    alert("Så roligtdet är när det kommer upp en ruta.");
    print();
    window.open("http://www.hd.se");

};

//6. Play with the DOM-properties
//### DOM page 126:###
DOM();
function DOM() {
    var msg = '<p><b>page title: </b>' + document.title + '<br/> ' ;
    msg += '<b>page address: </b>' +document.URL+ ' <br/>';
    msg += '<b>last modified : </b> ' + document.lastModified + ' </p>';

    var el = document.getElementById("one");
    el.innerHTML = msg;
}




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


