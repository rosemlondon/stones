document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('typing-container');
    const lines = [
        "I am going walking among the various intersecting planes",
        "I am going wandering around the city and then around the countryside",
        "We gravitate towards nodes",
        "I am centred around stones",
        "In the centre of my sternum there is a tattoo of a spiral",
        "Like the eroded finger-marks of cup-and-ring-marks, broken lines",
        "My heart beats under it",
        "I hold the land close when i get to a node",
        "Walking from one fork to another",
        "Walking from one junction to another",
        "Walking from one branching intersection to another",
        "This land is knit together by stones",
        "Mud-slip up the hill, the land is a body",
        "The land is a body",
        "The land is a body"
    ];
    const typingSpeed = 50;  // Time in ms between each character
    const lineDelay = 1000;   // Time in ms between each line

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (charIndex < lines[lineIndex].length) {
            container.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            charIndex = 0;
            lineIndex++;
            if (lineIndex >= lines.length) {
                lineIndex = 0; // Reset to the first line
            }
            setTimeout(() => {
                container.innerHTML = '';  // Clear the container for the next line
                typeLine();
            }, lineDelay);
        }
    }

    typeLine();
});