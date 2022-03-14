class Food {
    constructor (name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

const spaghetti = new Food ("Spaghetti", 4, "Healthy pasta with tomato sauce and ground beef.");
const burger = new Food ("Big Burger", 3.5, "170 gram tasty meat pattie with delecious vegetables between two enormous buns.");
const gulash = new Food ("Gulyás Soup", 2, "The traditional and famous hungarian soup.");
const pancake = new Food ("Pancake", 1, "The well known delecious dessert. You can order it with peanut butter, maple syrup or jam.");

const humanFood = [spaghetti, burger, gulash,pancake];

const dryDogFood = new Food ("Dry Dog Food", 0.5, "The most premium self brended dry dog food for give a healthy and nutritious meal for you best firend.");
const cannedDogFood = new Food("Canned Dog Food", 1, "If your mate likes more juicy meals, our self branded canned good can be a wise choice.");
const treats = new Food ("Happy Treats", 0.5, "Life is like a box of chocholates. If your buddy likes surprises, just buy one of these surprise treats.");

const dogFood = [dryDogFood, cannedDogFood, treats];



function loadMenu () {
    const contentDiv = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.innerText = "Menu";

    menuContainer.appendChild(title);

    const humanMenu = document.createElement("div");
    humanMenu.classList.add("menu", "human-menu-container");

    const humanTitle = document.createElement("h2");
    humanTitle.classList.add("human-meal")
    humanTitle.textContent = "Meal for humans";
    humanMenu.appendChild(humanTitle);

    humanFood.map((dish, index) => {
        const humanDish = document.createElement("div");
        humanDish.classList.add("dish", "human-dish");
        humanDish.setAttribute("id", `human-dish-${index}`)
        
        humanDish.textContent = `${dish.name}: ${dish.price} €`;

        const humanDishInfo = document.createElement("div");
        humanDishInfo.classList.add("dish-description");
        humanDishInfo.setAttribute("id", `info-${index}`);

        humanDishInfo.textContent = dish.description;

        humanDish.addEventListener("mouseover", () => {
            const description = document.getElementById(`info-${index}`);
            description.style.display = "block";
        });
        humanDish.addEventListener("mouseleave", () => {
            const description = document.getElementById(`info-${index}`);
            description.style.display = "none";
        })

        humanDish.appendChild(humanDishInfo);

        humanMenu.appendChild(humanDish);
    })

    menuContainer.appendChild(humanMenu);

    const dogMenu = document.createElement("div");
    dogMenu.classList.add("menu", "dog-menu-container");

    const dogTitle = document.createElement("h2");
    dogTitle.classList.add("dog-meal")
    dogTitle.textContent = "Meal for dogs";
    dogMenu.appendChild(dogTitle);

    dogFood.map((dish, index) => {
        const dogDish = document.createElement("div");
        dogDish.classList.add("dish", "dog-dish");
        
        dogDish.textContent = `${dish.name}: ${dish.price} €`;

        const dogDishInfo = document.createElement("div");
        dogDishInfo.classList.add("dish-description");
        dogDishInfo.setAttribute("id", `dog-info-${index}`);

        dogDishInfo.textContent = dish.description;

        dogDish.addEventListener("mouseover", () => {
            const description = document.getElementById(`dog-info-${index}`);
            description.style.display = "block";
        });
        dogDish.addEventListener("mouseleave", () => {
            const description = document.getElementById(`dog-info-${index}`);
            description.style.display = "none";
        })

        dogDish.appendChild(dogDishInfo);

        dogMenu.appendChild(dogDish);
    })

    menuContainer.appendChild(dogMenu);

    const bfMenu = document.createElement("div");
    bfMenu.classList.add("bf-menu-container");

    const bfTitle = document.createElement("h2");
    bfTitle.classList.add("bf-menu-title");
    bfTitle.textContent = "It's cheaper together";

    const bfSale = document.createElement("div");
    bfSale.classList.add("sale-description")
    bfSale.textContent = "If you order both human dish and dog dish, you get 10% off from the final price.";

    bfMenu.appendChild(bfTitle);
    bfMenu.appendChild(bfSale)

    menuContainer.appendChild(bfMenu);

    contentDiv.appendChild(menuContainer);

}

export default loadMenu;