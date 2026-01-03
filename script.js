// DARK MODE TOGGLE
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// EDIT JOB TITLE
const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.getElementById("jobTitle");

editJobBtn.onclick = function () {
    const newTitle = prompt("Enter your new job title:");

    if (newTitle !== null && newTitle.trim() !== "") {
        jobTitle.textContent = newTitle;
    }
};

// SHOW/HIDE SKILLS
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};

// LIVE CHARACTER COUNTER
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};

// FORM VALIDATION
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email fields before sending.");
        return false; // stops form submission
    }

    return true; // allows submission
}

// DISPLAY TODAY'S DATE SAFELY
window.addEventListener("load", function() {
    const dateDisplay = document.getElementById("dateDisplay");
    if (!dateDisplay) return;

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    dateDisplay.textContent = today.toLocaleDateString('en-US', options);
});

// RANDOM TAGALOG QUOTE GENERATOR
const quotes = [
    "Ang unang hakbang sa tagumpay ay ang simulan ito.",
    "Huwag hayaang malunod ka ng nakaraan, mamuhay sa kasalukuyan.",
    "Hindi mahalaga kung madapa ka, mahalaga kung bumangon ka.",
    "Kung nagtatrabaho ka sa isang bagay na mahalaga sa'yo, magpapatuloy ang iyong motibasyon.",
    "Ang tagumpay ay hindi sa kung anong meron ka, kundi sa kung sino ka.",
    "Mangarap ka. Hangarin mo. Gawin mo.",
    "Kapag pinaghirapan mo ang isang bagay, mas matamis ang tagumpay.",
    "Huwag maghintay ng oras; gawin mo kung ano ang ginagawa ng oras. Magpatuloy ka."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

quoteBtn.onclick = function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
};
