document.addEventListener("DOMContentLoaded", function () {
    var alienForm = document.getElementById("alienForm");
    var translateButton = document.getElementById("translateButton");
    var dancePartyButton = document.getElementById("danceParty");
    var mysteryScene = document.getElementById("mysteryScene");
    var fakeCrash = document.getElementById("fakeCrash");
    var alienLaugh = document.getElementById("alienLaugh");
    var instaCitizenshipButton = document.getElementById("instaCitizenship");
    var djVideoContainer = document.getElementById("djVideoContainer");
    var djVideo = document.getElementById("djVideo");
    alienForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var alienName = document.getElementById("alienName").value;
        var alienAge = parseInt(document.getElementById("alienAge").value, 10);
        var reason = document.getElementById("reason").value;
        var captcha = document.getElementById("captcha").value;
        var selectedPowers = document.querySelectorAll("input[name='Powers']:checked");
        if (alienName.length < 5) {
            alert("Alien name is too Human! Try a longer Alien Name!");
            return;
        }
        if (alienAge < 50) {
            alert("Sorry! Only mature aliens (50+ Zog years) can apply!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Even weak aliens need at least 2 Powers.");
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
    translateButton.addEventListener("click", function () {
        alert("Alien Translator Activated! Beep Boop!");
    });
    instaCitizenshipButton.addEventListener("click", function () {
        alert("Ha! Ha! Nice Try, Earthian! You think Insta Citizenship is that easy??");
    });
    dancePartyButton.addEventListener("click", function () {
        alert("Alien DJ Mode On..! It's time for an Alien Party!!");
        djVideoContainer.classList.remove("hidden"); // Ensure the container is visible
        // Set the correct video URL with autoplay enabled
        var videoSrc = "https://www.youtube.com/embed/FzG4uDgje3M?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showinfo=0";
        if (djVideo.src !== videoSrc) {
            djVideo.src = videoSrc; // Update the video src only if not already set
        }
    });
    document.querySelectorAll("input[name='Relationship']").forEach(function (radio) {
        radio.addEventListener("change", function () {
            var selectedRelations = document.querySelectorAll("input[name='Relationship']:checked");
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", function () {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(function () {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
