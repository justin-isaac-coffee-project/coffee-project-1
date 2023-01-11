"use strict"

// This function creates the coffee div and also adds the h2 with the coffee names within the div and then returns the div with all the children appended
function renderCoffee(coffee) {
    let div = document.createElement("div");
    let heading = document.createElement("h2");
    heading.textContent = coffee.name;
    let p = document.createElement("p");
    p.textContent = coffee.roast;

    div.appendChild(heading);
    div.appendChild(p);

    return div;
}

// Update coffees function is waiting for a event so when we click the submit button we will clear what ever is in the box and then call the renderCoffee function to display what ever it is we clicked.
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    tbody.innerHTML = ''; // clear the previous coffees
    const selectedRoast = roastSelection.value;
    const filteredValue = inputField.value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
       if(selectedRoast === "all"){
           tbody.appendChild(renderCoffee(coffee));
       } else if (coffee.roast === selectedRoast &&
           coffee.name.toLowerCase().includes(filteredValue)) {
           tbody.appendChild(renderCoffee(coffee));
           // append the new filtered coffees
       }
    });
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const inputField = document.querySelector('.input');

// This loop will display all the coffees we have as soon as the page loads
for(let i = coffees.length - 1; i >= 0; i--) {
    tbody.appendChild(renderCoffee(coffees[i]));
}
submitButton.addEventListener('click', updateCoffees);
inputField.addEventListener("keyup", updateCoffees)


