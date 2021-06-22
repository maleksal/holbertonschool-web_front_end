function changeMode(size, weight, transform, background, color) {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;

}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, bold, "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let para = document.createElement("p");
    para.textContent = "Welcome Holberton!";

    let spoky = document.createAttribute("Button");
    spooky.textContent = "Spooky";

    let dark = document.createAttribute("Button");
    dark.textContent = "Dark mode";

    let scream = document.createAttribute("Button");
    scream.textContent = "Screame mode";

    document.body.append(spooky);
    document.body.append(dark);
    document.body.append(scream);
  
    spoky.addEventListener("click", spooky);
    dark.addEventListener("click", darkMode);
    scream.addEventListener("click", screamMode);
}

main();