function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
}

// Helper function to introduce delays
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeDots(container, count) {
    container.innerHTML = container.innerHTML.slice(0, -count); 
}

let messages = [
    "Initialising Hacking",
    "Reading your files", 
    "Password Files Detected", 
    "Sending all passwords and personal files to server",
    "Cleaning Up"
];

async function dots(container) {
    const maxDots = 3;
    let isHidden = false;

    let timeSet = getRandomNumber()*1000;

    // Change the variable to true after 1-7 seconds
    setTimeout(() => {
        isHidden = true;
    }, timeSet);

    while (!isHidden) {
        // Add dots one by one
        for (let i = 0; i < maxDots; i++) {
            await addText(container, ".");
            await sleep(500);
        }
        // Pause before removing the dots
        await removeDots(container, maxDots); // Remove the dots
        await sleep(500);
    }
    await addText(container, "...");
}

async function addText(container, text) {
    container.innerHTML += text;
}

async function main() {
    const container = document.querySelector(".container");

    // Set typewriter font style and border for the container
    container.style.fontFamily = "'Courier New', Courier, monospace"; // Typewriter font
    container.style.border = "2px solid white"; // White border
    container.style.padding = "10px"; // Add some padding inside the container
    container.style.margin = "20px"; // Add some space around the container
    container.style.maxWidth = "80%"; // Limit the width to 80% of the screen
    container.style.whiteSpace = "pre-wrap"; // Ensures that line breaks are respected

    for (const message of messages) 
    {
        await addText(container, message);
        await dots(container);
        await addText(container, "<br>");
    }
    await addText(container, "Done!<br>");
}
document.body.style.backgroundColor = "green";
document.body.style.color = "white";
main();

