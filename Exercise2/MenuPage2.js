
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

StyleSite(Hamburgers);

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
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Price: " + listOfBurger[i].price + "$"));
        productDiv.appendChild(document.createElement("div")).appendChild(document.createTextNode("Size: " + listOfBurger[i].size));
        burger.appendChild(productDiv);        
    }
}


//2. create Product objects with constructor notation, 
//   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
var DrinkList = [new Product("LemonTea", 50, "Monday", 1.99, "\Images/Drink.png"),
new Product("Cola", 33, "Tuesday", 1.99, "\Images/Drink.png"),
new Product("Sprite", 33, "Wednesday", 1.99, "\Images/Drink.png"),
new Product("Fanta", 33, "Thurday", 1.99, "\Images/Drink.png"),
new Product("Cola Light", 33, "Friday", 1.99, "\Images/Drink.png"),
new Product("Fanta Light", 33, "Saturday", 1.99, "\Images/Drink.png"),
new Product("Coffee", 20, "Sundayday", 1.99, "\Images/Drink.png")];

function Product(name, size, day, price, img) {
    this.name = name;
    this.size = size;
    this.day = day;
    this.price = price;
    this.img = img;
}

StyleSite(DrinkList);

var PizzaList = [new Product("Kebab", "Normal", "Monday", 7.99, "\Images/Pizza.png"),
new Product("MARGHERITA", "Normal", "Tuesday", 7.99, "\Images/Pizza.png"),
new Product("VESUVIO", "Normal", "Wednesday", 7.99, "\Images/Pizza.png"),
new Product("CAPRICCIOSA", "Normal", "Thurday", 7.99, "\Images/Pizza.png"),
new Product("BOLOGNESE", "Normal", "Friday", 7.99, "\Images/Pizza.png"),
new Product("Q STAGIONE", "Normal", "Saturday", 7.99, "\Images/Pizza.png"),
new Product("HAWAII", "Normal", "Sundayday", 7.99, "\Images/Pizza.png")];

StyleSite(PizzaList);
//3. add 7 drinks to the page using Product.
//4. add 7 pizzas to the page using Product.
//5. add 7 subs to the page using Product.
//6. GO to file FixIt.html

//DRINKS
//Subs