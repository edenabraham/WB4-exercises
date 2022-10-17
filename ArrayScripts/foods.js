
let lunch= [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Cips and Guacamole", price: 5.25},
    {item: "Sweat Tea", price: 2.79},

];
//Bonus - how to add one more item after array is declared
lunch.push({item: "Burger", price: 1.23});// now 4th order


function getCost(order) { 
    let cost = order.price; 
    const tax = 0.08;
    const tip = 0.18;
    let totalCost = (cost + (cost * tax)) + (cost * tip);
    console.log("ORDER: $"+order.item+" TOTAL: $"+totalCost.toFixed(2));
    }

    for (let i = 0; i < lunch.length; i++) {
        let order = lunch[i];
        getCost(order);
    }