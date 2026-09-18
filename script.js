// DONOR REGISTRATION

function registerDonor(event) {

    event.preventDefault();

    let name = document.getElementById("donorName").value;

    alert("Donor Registered Successfully!\nWelcome " + name);

    event.target.reset();
}


// DONATE FOOD

function donateFood(event) {

    event.preventDefault();

    let food = document.getElementById("foodName").value;
    let quantity = document.getElementById("quantity").value;

    alert(
        "Food Donated Successfully!\n\n" +
        "Food: " + food +
        "\nQuantity: " + quantity + " meals"
    );

    event.target.reset();
}


// SEARCH FOOD

function searchFood() {

    let search =
        document.getElementById("search")
        .value
        .toLowerCase();

    let category =
        document.getElementById("category")
        .value;

    let location =
        document.getElementById("location")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".food-card");

    cards.forEach(function(card) {

        let name =
            card.dataset.name;

        let cat =
            card.dataset.category;

        let loc =
            card.dataset.location.toLowerCase();

        let matchName =
            name.includes(search);

        let matchCategory =
            category === "All" ||
            cat === category;

        let matchLocation =
            loc.includes(location);

        if (
            matchName &&
            matchCategory &&
            matchLocation
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });
}


// REQUEST FOOD

function requestFood(foodName) {

    document.getElementById("selectedFood").value =
        foodName;

    document.getElementById("selectedFoodText").innerHTML =
        "<b>" + foodName + "</b><br>" +
        "Available for request.";

    location.href = "#request";
}


// SUBMIT REQUEST

function submitRequest(event) {

    event.preventDefault();

    let food =
        document.getElementById("selectedFood").value;

    let name =
        document.getElementById("requestName").value;

    if (food === "") {

        alert("Please select food first!");

        return;
    }

    alert(
        "Food Request Submitted Successfully!\n\n" +
        "Food: " + food +
        "\nRequested By: " + name
    );

    event.target.reset();

    document.getElementById("selectedFood").value =
        food;
}


// CONTACT

function sendMessage(event) {

    event.preventDefault();

    let name =
        document.getElementById("contactName").value;

    alert(
        "Thank you " + name +
        "!\nYour message has been sent."
    );

    event.target.reset();
}


// LOGIN

function login() {

    let email =
        prompt("Enter your email:");

    if (email) {

        alert(
            "Login successful!\nWelcome to FoodShare."
        );

    }
}


// SIGNUP

function signup() {

    let name =
        prompt("Enter your name:");

    if (name) {

        alert(
            "Account created successfully!\n" +
            "Welcome " + name
        );

    }
}