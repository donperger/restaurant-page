function createContent() {
    const contentDiv = document.getElementById("content");

    const img = document.createElement("img");
    img.src = '../img/karsten-winegeart-qy0BHykaq0E-unsplash (1).jpg';
    contentDiv.appendChild(img);

    const header = document.createElement("h1");
    header.textContent = 'Restaurant for humans and their best friends';
    contentDiv.appendChild(header);

    const description = document.createElement("div");
    description.textContent = 'Our restaurant is a animal friendly place. If you want to have a prefect meal with your best friends (humans and/or animals) just come to us and order some delicous dish for all of you.';
    contentDiv.appendChild(description);
}

export default createContent;