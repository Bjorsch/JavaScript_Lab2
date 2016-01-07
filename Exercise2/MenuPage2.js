
//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.


var hamburger = [
    {
        name: "MondayBurger",
        size: "Small",
        day: "Monday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Tuesday Burger",
        size: "XXL",
        day: "Tuesday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Wednesday Burger",
        size: "XSmall",
        day: "Wednesday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Thursday Burger",
        size: "TooBig",
        day: "Thursday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Friday Burger",
        size: "Nice Size",
        day: "Friday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Saturday Burger",
        size: "Grande",
        day: "Saturday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    },
    {
        name: "Sunday Burger",
        size: "Mhm",
        day: "Sunday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    }
];

StyleSite(hamburger);

function StyleSite(listOfBurger) {
    for (var i = 0; i < listOfBurger.length; i++) {

        var image = document.createElement("img");
        image.src = listOfBurger[i].img;
        var burger = document.getElementById("burgersPlace");

        var productDiv = document.createElement("article")
            .appendChild(document.createElement("fieldset"))
            .appendChild(document.createElement("legend"))
            .appendChild(document.createTextNode(listOfBurger[i].day)).parentNode.parentNode
            .appendChild(document.createElement("h3"))
            .appendChild(document.createTextNode(listOfBurger[i].name)).parentNode.parentNode;

        productDiv.appendChild(document.createElement("span")).appendChild(image);
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Price: " + listOfBurger[i].price));
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Size: " + listOfBurger[i].size));
        burger.appendChild(productDiv);        
    }
}




//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.
//6. GO to file FixIt.html

//DRINKS
//Subs