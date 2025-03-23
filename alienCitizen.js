document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm");
    const translateButton = document.getElementById("translateButton");
    const dancePartyButton = document.getElementById("danceParty");
    const mysteryScene = document.getElementById("mysteryScene");
    const fakeCrash = document.getElementById("fakeCrash");
    const alienLaugh = document.getElementById("alienLaugh");
    alienForm.addEventListener("submit", (Event) => {
        Event.preventDefault();
        const alienName = document.getElementById("alienName").value;
        const reason = document.getElementById("reason").value;
        const captcha = document.getElementById("=captcha").value;
        if (alienName.length < 5) {
            alert("Alien name must be atleast 5 characters long!");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully! Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", () => {
        alert("Alien Translator Activated! Beep Boop!");
    });
    dancePartyButton.addEventListener("click", () => {
        alert("Alien DJ Mode On..! Its time to Alien Party!!");
        alienLaugh.play();
    });
    document.querySelectorAll("input[name='relation']").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const selectedRelations = Array.from(document.querySelectorAll("input[name='relation']:checked"));
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", () => {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
