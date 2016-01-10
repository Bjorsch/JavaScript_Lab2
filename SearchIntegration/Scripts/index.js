$(document).ready(function () { //Körs när html är färdig laddad
    SearchField();
    $("#search").keydown(function () {
        SearchField();
    });
    $(".box").change(function () {
        SearchField();
    });
});

function SearchField() {
    var output = "<ul class ='result'>";
    var field = $("#search").val(); //sparar undan värdet man skriver in
    var myRegex = new RegExp(field, "i");
    $.getJSON("ItemList.json", function (data) {
        $.each(data, function (key, val) {
            if ((val.name.search(myRegex) !== -1) ||
            (val.about.search(myRegex) !== -1) ||
            (val.Category.search(myRegex) !== -1)) {
                if ($("#" + val.Category).is(":checked")) {
                    output += "<li>";
                    output += "<p>";
                    output += "Produkt : " + val.name + "</br>";
                    output += "Kategori : " + val.Category + "</br>";
                    output += "Om produkten : " + val.about + "</br>";
                    output += "Om produkten : " + val.price + " $";
                    output += " </p>";
                    output += "<img src='Images/" + val.url_image;
                    output += "'alt='" + val.name;
                    output += "'/>";
                    output += "</li>";
                }
            }
        });
        output += "</ul>";
        $("#update").html(output);
    });
}
