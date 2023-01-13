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
function updateCoffees() {
    tbody.innerHTML = '';
    const selectedRoast = roastSelection.value;
    const filterText = inputField.value.toLowerCase(); // this is coming from the input value
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (shouldRenderCoffee(coffee, selectedRoast, filterText)) {
            tbody.appendChild(renderCoffee(coffee));
        }
    });
}

function shouldRenderCoffee(coffee, selectedRoast, filterText) {
    if (selectedRoast !== 'all' && coffee.roast !== selectedRoast) {
        return false;
    }
    if (!coffee.name.toLowerCase().includes(filterText)) {
        return false;
    }
    return true;
}

function addCoffee (e){
    e.preventDefault();
    const addRoastSelection = addCoffeeSelection.value;
    const addCoffeeInputSelection = addCoffeeInput.value;
    const newObj = {
        id: coffees.length + 1,
        roast: addRoastSelection,
        name: addCoffeeInputSelection,
    }
    coffees.push(newObj);
    addCoffeeSelection.value = "";
    addCoffeeInput.value = "";
    updateCoffees();
}

let coffees = [
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
const addCoffeeSubmit = document.querySelector('#submit-coffee');
const addCoffeeSelection = document.querySelector('#add-roast-selection')
const addCoffeeInput = document.querySelector('#add-coffee-input');
const addCoffeeForm = document.querySelector('#add-coffee-form')

// This loop will display all the coffees we have as soon as the page loads
for(let i = coffees.length - 1; i >= 0; i--) {
    tbody.appendChild(renderCoffee(coffees[i]));
}


addCoffeeForm.addEventListener('submit', addCoffee);
submitButton.addEventListener('click', updateCoffees);
inputField.addEventListener("keyup", updateCoffees);
roastSelection.addEventListener("change", updateCoffees);



