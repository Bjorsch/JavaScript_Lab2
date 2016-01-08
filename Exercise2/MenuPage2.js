/// <reference path="C:\Skola\JavaScript\git\JavaScript_Lab2\Exercise2\FixIt.html" />
/// <reference path="C:\Skola\JavaScript\git\JavaScript_Lab2\Exercise2\FixIt.html" />
/// <reference path="C:\Skola\JavaScript\git\JavaScript_Lab2\Exercise2\FixIt.html" />

//1. create 7 hamburger objects using literal notation 
//   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
//   Please use the same html syntax of an article as in exercise1.
var Hamburgers = [
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
        size: "Large",
        day: "Sunday",
        price: 10.99,
        img: "\Images/Hamburger.png"
    }
];

StyleSite(Hamburgers, "burgersPlace");

function StyleSite(listOfBurger, byId) {
    var burger = document.getElementById(byId);
    for (var i = 0; i < listOfBurger.length; i++) {

        var image = document.createElement("img");
        image.src = listOfBurger[i].img;

        var productDiv = document.createElement("article")
            .appendChild(document.createElement("fieldset"))
            .appendChild(document.createElement("legend"))
            .appendChild(document.createTextNode(listOfBurger[i].day)).parentNode.parentNode
            .appendChild(document.createElement("h3"))
            .appendChild(document.createTextNode(listOfBurger[i].name)).parentNode.parentNode;

        productDiv.appendChild(document.createElement("span")).appendChild(image);
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Price: " + listOfBurger[i].price + "$"));
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Size: " + listOfBurger[i].size));
        
        burger.appendChild(productDiv);
        
    }
    
}

//2. create Product objects with constructor notation, 
function Product(name, size, day, price, img) {
    this.name = name;
    this.size = size;
    this.day = day;
    this.price = price;
    this.img = img;
}

//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
//3. add 7 drinks to the page using Product.
var DrinkList = [new Product("LemonTea", 50, "Monday", 1.99, "\Images/Drink.png"),
new Product("Cola", 33, "Tuesday", 1.99, "\Images/Drink.png"),
new Product("Sprite", 33, "Wednesday", 1.99, "\Images/Drink.png"),
new Product("Fanta", 33, "Thurday", 1.99, "\Images/Drink.png"),
new Product("Cola Light", 33, "Friday", 1.99, "\Images/Drink.png"),
new Product("Fanta Light", 33, "Saturday", 1.99, "\Images/Drink.png"),
new Product("Coffee", 20, "Sundayday", 1.99, "\Images/Drink.png")];
StyleSite(DrinkList, "drinksPlace");

//4. add 7 pizzas to the page using Product.
var PizzaList = [new Product("Kebab", "Normal", "Monday", 7.99, "\Images/Pizza.png"),
new Product("MARGHERITA", "Normal", "Tuesday", 7.99, "\Images/Pizza.png"),
new Product("VESUVIO", "Normal", "Wednesday", 7.99, "\Images/Pizza.png"),
new Product("CAPRICCIOSA", "Normal", "Thurday", 7.99, "\Images/Pizza.png"),
new Product("BOLOGNESE", "Normal", "Friday", 7.99, "\Images/Pizza.png"),
new Product("Q STAGIONE", "Normal", "Saturday", 7.99, "\Images/Pizza.png"),
new Product("HAWAII", "Normal", "Sundayday", 7.99, "\Images/Pizza.png")];
StyleSite(PizzaList, "pizzaPlace");

//5. add 7 subs to the page using Product.
var SubList = [new Product("Steak & Cheese", "Normal", "Monday", 5.99, "\Images/Subs.png"),
new Product("Veggie Delite", "Normal", "Tuesday", 5.99, "\Images/Subs.png"),
new Product("SPICY ITALIAN", "Normal", "Wednesday", 5.99, "\Images/Subs.png"),
new Product("ITALIAN B.M.T.", "Normal", "Thurday", 5.99, "\Images/Subs.png"),
new Product("CHICKEN TERIYAKI", "Normal", "Friday", 5.99, "\Images/Subs.png"),
new Product("Sub Beef", "Normal", "Saturday", 5.99, "\Images/Subs.png"),
new Product("VEGGIE BIFF", "Normal", "Sundayday", 5.99, "\Images/Subs.png")];
StyleSite(SubList, "subsPlace");


//6. GO to file FixIt.html


