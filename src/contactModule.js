function loadContact () {
    const contentDiv = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("contact-title");

    contactTitle.textContent = "Contact";
    
    contactContainer.appendChild(contactTitle);

    const contactDescription = document.createElement("div");
    contactDescription.classList.add("contact-decription");
    contactDescription.textContent = "You can find us on Dog Island, Anguilla. See on the map:";

    contactContainer.appendChild(contactDescription)

    const contactMap = document.createElement("div");
    contactMap.classList.add("map");
    contactMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7577.038354428469!2d-63.253054623684726!3d18.277850650203206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0e5fa772956ecf%3A0xa3b95813e63e95df!2sDog%20Island!5e0!3m2!1shu!2shu!4v1647290591115!5m2!1shu!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    
    contactContainer.appendChild(contactMap);

    const formContainer = createForm();

    contactContainer.appendChild(formContainer);

    contentDiv.appendChild(contactContainer);
}

function createForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const fromElement = document.createElement("form");
    formContainer.appendChild(fromElement);

    const fieldSet = document.createElement("fieldset");
    fromElement.appendChild(fieldSet);

    const legend = document.createElement("legend");
    legend.textContent = "Contact us!";

    fieldSet.appendChild(legend);

    const requiredDiv = document.createElement("div");
    requiredDiv.classList.add("required-title");
    requiredDiv.textContent = "*required";

    fieldSet.appendChild(requiredDiv);

    const fullNameContainer = document.createElement("div");
    fullNameContainer.classList.add("full-name-container", "input-container");

    const fullNameLabel = document.createElement("label");
    fullNameLabel.textContent = "Full name*";
    fullNameLabel.setAttribute("for", "full_name");
    fullNameContainer.appendChild(fullNameLabel);

    const fullNameInput = document.createElement("input");
    fullNameInput.setAttribute("type", "text");
    fullNameInput.setAttribute("id", "full_name");
    fullNameInput.setAttribute("placeholder", "John Doe");
    fullNameInput.required = true;
    fullNameContainer.appendChild(fullNameInput);

    fieldSet.appendChild(fullNameContainer);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("email-container", "input-container");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email*";
    emailLabel.setAttribute("for", "email");
    emailContainer.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "john.doe@dogowner.com");
    emailInput.required = true;
    emailContainer.appendChild(emailInput);

    fieldSet.appendChild(emailContainer);

    const dogNameContainer = document.createElement("div");
    dogNameContainer.classList.add("dog-name-container", "input-container");

    const dogNameLabel = document.createElement("label");
    dogNameLabel.textContent = "Dog name";
    dogNameLabel.setAttribute("for", "dog_name");
    dogNameContainer.appendChild(dogNameLabel);

    const dogNameInput = document.createElement("input");
    dogNameInput.setAttribute("type", "text");
    dogNameInput.setAttribute("id", "dog_name");
    dogNameInput.setAttribute("placeholder", "Lucky");
    dogNameContainer.appendChild(dogNameInput);

    fieldSet.appendChild(dogNameContainer);
    
    const messageContainer =  document.createElement("div");
    messageContainer.classList.add("message-container", "input-container");

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Your message";
    messageLabel.setAttribute("for", "message");
    messageContainer.appendChild(messageLabel);

    const message = document.createElement("textarea");
    message.setAttribute("id", "message");
    message.setAttribute("rows", 10);
    messageContainer.appendChild(message);

    fieldSet.appendChild(messageContainer);

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("send-btn");
    sendBtn.textContent = "Send";

    fieldSet.appendChild(sendBtn);

    return formContainer;
}

export default loadContact;