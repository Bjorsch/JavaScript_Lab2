$(document).ready(function() { //Körs när htmlsidan är färdig laddad
    SearchField();
    $("#search").keypress(function ()
    {
        SearchField();
    });
});

function SearchField() {
   
        var field = $("#search").val(); //sparar undan värdet man skriver in
        var myRegex = new RegExp(field, "i");
        $.getJSON("ItemList.json", function (data) {
            var output = "<ul class ='result'>";
            $.each(data, function (key, val) {
                if ((val.name.search(myRegex) !== -1) ||
                    (val.about.search(myRegex) !== -1)) {
                    output += "<li>";
                    output += "<p>";
                    output += "Name: " + val.name + "</br>";
                    output += " Category: " + val.Category;
                    output += " </p>";
                    output += "<img src='Images/" + val.url_image;
                    output += "'alt='" + val.name;
                    output += "'/>";
                    output += "</li>";
                }
            });
            output += "</ul>";
            $("#update").html(output);
        });
}


