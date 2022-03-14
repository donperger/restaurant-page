function createContent() {
    const contentDiv = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = 'Restaurant for humans and their best friends';
    header.classList.add("main-title")
    contentDiv.appendChild(header);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.classList.add("main-cover")

    img.src = '../img/karsten-winegeart-qy0BHykaq0E-unsplash (1).jpg';
    imgContainer.appendChild(img);
    contentDiv.appendChild(imgContainer);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    const description = document.createElement("div");
    description.classList.add("description");

    description.textContent = 'Our restaurant is a animal friendly place. If you want to have a prefect meal with your best friends (humans and/or animals) just come to us and order some delicous dish for all of you.';
    description.textContent = description.textContent + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    descriptionContainer.appendChild(description);
    contentDiv.appendChild(descriptionContainer)
}

export default createContent;