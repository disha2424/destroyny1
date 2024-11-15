document.addEventListener("DOMContentLoaded", function() {
    // Wait for 22 seconds after the page loads
    setTimeout(function() {
        const circle = document.getElementById('circle');
        if (circle) {
            circle.classList.add('glow');  // Add the 'glow' class to create the glowing effect
        }
    }, 22000);

    // Toggle button click event
    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            setTimeout(function() {
                var gridContainer = document.querySelector(".grid-container");
                var text1 = document.querySelector(".text1");

                // Ensure both elements exist before trying to change their display
                if (gridContainer && text1) {
                    gridContainer.style.display = "none";
                    text1.style.display = "block";
                }
            }, 1000); // 1 second delay (1000 ms)
        });
    }

    // Function to handle rotation on click
    function addRotation(element) {
        if (element) {
            element.addEventListener("click", function() {
                this.classList.toggle("rotate"); // Toggles the 'rotate' class on click
            });
        }
    }

    // Get both knobs and apply the rotation function
    var knob1 = document.getElementById("knob1");
    var knob2 = document.getElementById("knob2");

    addRotation(knob1);
    addRotation(knob2);
});

document.getElementById("speaker").addEventListener("click", function() {
    var audio = document.getElementById("audioPlayer");
    
    if (audio.paused) {
        audio.play(); // Play music if it's paused
    } else {
        audio.pause(); // Pause music if it's playing
    }
});
