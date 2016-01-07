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
//function CreateABox2(kalle) {
//    var myBox = document.createElement("div");
//    myBox.setAttribute("class", "box2");
//    var myDocument = document.getElementsByTagName("body");
//    myDocument[0].appendChild(myBox);
//    myBox.addEventListener('click', kalle, true);
//}


function myNewFunction2() {    
    alert("Så roligt det är när det kommer upp en ruta.");
    print();
    window.open("http://www.hd.se");

};

//6. Play with the DOM-properties
//### DOM page 126:###

CreateABox(DOM);

function DOM() {
    var msg = '<p><b>page title: </b>' + document.title + '<br/> ' ;
    msg += '<b>page address: </b>' +document.URL+ ' <br/>';
    msg += '<b>last modified : </b> ' + document.lastModified + ' </p>';

    var el = document.getElementById("two");
    el.innerHTML = msg;
}

//7. Save the the text from the makeMeAnArray-paragraph into an array.

var word = document.getElementById("makeMeAnArray").innerText;
var array =  word.split(" ");
//8. Use all the string methods and propertys allong with the array
CreateABox(name);
function name() {
    
    var myArray = document.getElementById("makeMeAnArray").innerText;
    var msg = "Length: " + myArray.length + "</br>";
    msg += "toUpperCase: " + myArray.toUpperCase() + "</br>";
    msg += "toLowerCase: " + myArray.toLowerCase() + "</br>";
    msg += "charAt: " + myArray.charAt(myArray.length - 1) + "</br>";
    msg += "indexOF: " + myArray.indexOf(33) + "</br>";
    msg += "lastIndexOf: " + myArray.lastIndexOf('e') + "</br>";
    msg += "substring: " + myArray.substring(0, 11) + "</br>";
    msg += "split: " + myArray.split(' ') + "</br>";
    msg += "trim: " + myArray.trim() + "</br>";
    msg += "replace: " + myArray.replace('klo', 'java') + "</br>";
    
    var el = document.getElementById("two");
    el.innerHTML = msg;

    
}

//### String objects page 128, 129: ###

//### String objects page 132: ###
//9. check if the 4th element in the array is a number
CreateABox(ElementInArray);

function ElementInArray() {       
    //if (word) {
    //    alert('Har ett värde!');
    //}
    //else {
    //    alert('Har INTE ett värde!');
    //}    
    if (array[4].isNaN) {
        alert("Inget Nummer");
    } else {
        alert("Nummer");
    }
}



//### Math page 134: ###
//10. Round one of the numbers in the paragraph up/down
CreateABox(RoundNumber);
function RoundNumber() {
    alert(Math.round(array[4]));
}
//11. replace the 3rd word with PI then roud it to the nearest integer

CreateABox(ReplaceWord);

function ReplaceWord() {
    var nearest = array[2].replace(array[2], Math.PI);
    alert(Math.round(nearest));
}

//### Date object###
//12. Calculate how many days it's until your birthday and present it.
CreateABox(Birthday);
function Birthday() {
    var birthDay= new Date(1981, 5, 9);
    var today = new Date();
    birthDay.setFullYear(today.getFullYear());
    var diff = (birthDay - today) / (1000 * 60 * 60 * 24);

    alert(Math.ceil(diff));
}

//13. Calculate how many minutes old you are and present it.


