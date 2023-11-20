function showWelcome(){
    var nameInput = document.querySelector("input");
    var welcomeMessage = document.querySelector("#welcome-message");

    var name = nameInput.value;
    welcomeMessage.textContent = `Welcome to the site ${name}`;
}
