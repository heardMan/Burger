$(document).ready(function () {
    function displayBurgers(burgers) {
        $("#fresh").empty();
        $("#devoured").empty();
        burgers.forEach(element => {
            var burgerElem = `<div id="burger-${element.id}" class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-image">
                                    <img style="max-width: 300px; margin: auto;" src="http://localhost:3000/assets/img/${element.img}.png">
                                </div>
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col s8">${element.name}</div>
                                        <div class="col s4">
                                        <a id="devour-${element.id}" class="btn-floating btn-large waves-effect waves-light red"><i class="fas fa-utensils"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            if (element.devoured === 0) {
                $("#fresh").append(burgerElem);
            } else {
                $("#devoured").append(burgerElem);
                $(`#devour-${element.id}`).remove();
            }

            $(`#devour-${element.id}`).click(function(e){
                e.preventDefault();
                console.log("clicked");
                var burger = {id: element.id};
                $.post("/api/devour", burger);
                renderBurgers();
            });

        });

    }
    function renderBurgers() {
        $("#fresh").empty();
        $("#devoured").empty();
        $.get("api/burgers", function (data) {
            console.log(data);
            displayBurgers(data);
        })
    }
    renderBurgers();

    $("#addNewBurger").click(function (e) {
        e.preventDefault();
        var newBurger = {burger: $("#newBurger").val()};
        console.log(newBurger);
        $.post("api/burgers", newBurger);
        renderBurgers();
    })

});