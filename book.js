var app = new Vue({
    el: '#app',
    data: {
        search: "",
        books: []

    }
});



var books;


fetch("https://api.myjson.com/bins/1h3vb3", {

    method: "GET",

}).then(function (response) {

    if (response.ok) {

        return response.json();
    }

    throw new Error(response.statusText);
}).then(function (json) { //respuesta convertida en JSON

    // do something with json data

    books = json;

    app.books = json.books;

    /* myFunction();*/

    //functions placed inside FETCH are asynchronouse.





}).catch(function (error) {
    // called when an error occurs anywhere in the chain
    console.log("Request failed: " + error.message);
});
/* el fetch es una orden de accion
"/users"  es la ruta de acceso a los datos, el API*/



function myFunction() {
    var input, filter, row, card, a, i;
    input = document.getElementById("txtSearch");
    filter = input.value.toUpperCase();
    row = document.getElementById("row");
    card = row.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        a = card[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";

        }
    }
}

