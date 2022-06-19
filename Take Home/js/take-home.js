// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML 

class Car {
    constructor(title, list) {
        this.title = title;
        this.list = list;
    }
    render() {
        const body = document.body;
        const title = document.createElement('h2');
        title.innerText = this.title; 
        body.appendChild(title); 
        title.style.color = 'red'; 
        body.style.backgroundColor = '#ccc'; 
        const ul = document.createElement('ul');
        body.appendChild(ul);
        this.list.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        });

    }
}  

const car1 = new Car('Car 1', ['Make: Honda', 'Model: Civic', 'Year: 2022', 'Color: Red']); 
const car2 = new Car('Car 2', ['Make: Toyota', 'Model: Gr-86', 'Year: 2022', 'Color: Black']); 
const car3 = new Car('Car 3', ['Make: Audi', 'Model: e-Tron GT', 'Year: 2022', 'Color: Silver']); 
const car4 = new Car('Car 4', ['Make: Genesis', 'Model: G70', 'Year: 2022', 'Color: Black']); 

car1.render(); 
car2.render(); 
car3.render();
car4.render(); 

console.log(car1, car2, car3, car4); 
// Car {title: 'Car 1', list: Array(4)}
// list: (4) ['Make: ', 'Model: ', 'Year: ', 'Color: ']
// title: "Car 1"
// [[Prototype]]: Object
 
// Car {title: 'Car 2', list: Array(4)}
// list: (4) ['Make: ', 'Model: ', 'Year: ', 'Color: ']
// title: "Car 2"
// [[Prototype]]: Object
 
// Car {title: 'Car 3', list: Array(4)}
// list: (4) ['Make: ', 'Model: ', 'Year: ', 'Color: ']
// title: "Car 3"
// [[Prototype]]: Object
 
// Car {title: 'Car 4', list: Array(4)}
// list: (4) ['Make: ', 'Model: ', 'Year: ', 'Color: ']
// title: "Car 4"
// [[Prototype]]: Object 
