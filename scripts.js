// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = 0;
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let xPos = 0;
    let yPos = -250;

    // When the "Take off" button is clicked, the following should happen:
    takeOffButton.addEventListener("click",function(){
        // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add steps 2-4.
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (shuttleReady){
            // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight";
            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleFlightScreen.style.background = "blue";
            // The shuttle height should increase by 10,000 miles.
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
            yPos += 10;
            rocket.style.bottom = yPos + "px";
        }
    });

    // When the "Land" button is clicked, the following should happen:
    landButton.addEventListener("click",function(){
        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        window.alert("The shuttle is landing. Landing gear engaged");
        // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The shuttle has landed";
        // The background color of the shuttle flight screen should change from blue to green.
        shuttleFlightScreen.style.background = "green";
        // The shuttle height should go down to 0.
        height = 0;
        spaceShuttleHeight.innerHTML = height;

        yPos = -250;
        xPos = 0;
        rocket.style.bottom = yPos + "px";
        rocket.style.right = xPos + "px";
    });

    // When the "Abort Mission" button is clicked, the following should happen:
    abortButton.addEventListener("click",function(){
        // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add steps 2-4.
        let abortStatus = window.confirm("Confirm that you want to abort the mission");

        if (abortStatus){
            // The flight status should change to "Mission aborted."
            flightStatus.innerHTML = "Mission aborted";
            // The background color of the shuttle flight screen should change from blue to green.
            shuttleFlightScreen.style.background = "green";
            // The shuttle height should go do to 0.
            height = 0;
            spaceShuttleHeight.innerHTML = height;

            yPos = -250;
            xPos = 0;
            rocket.style.bottom = yPos + "px";
            rocket.style.right = xPos + "px";
        }
    });

    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    // The rocket image should move 10 px in the direction of the button that was clicked.
    left.addEventListener("click",function(){
        if (xPos < 250){
            xPos += 10;
            // rocket.style.position = "relative";
            // rocket.style.transform = "translateX(" + xPos + "px)";
            rocket.style.right = xPos + "px";
        }
    });
    right.addEventListener("click",function(){
        if (xPos > -250){
            xPos -= 10;
            // rocket.style.position = "relative";
            // rocket.style.transform = "translateX(" + xPos + "px)";
            rocket.style.right = xPos + "px";
        }
    });
    down.addEventListener("click",function(){
        yPos -= 10;
        // rocket.style.position = "relative";
        // rocket.style.transform = "translateY(" + yPos + "px)";
        rocket.style.bottom = yPos + "px";

        height -= 10000;
        spaceShuttleHeight.innerHTML = height;
    });
    up.addEventListener("click",function(){
        if (10000 <= height && height < 250000){
            yPos += 10;
            // rocket.style.position = "relative";
            // rocket.style.transform = "translateY(" + yPos + "px)";
            rocket.style.bottom = yPos + "px";
    
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
        }
    });
    // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    // 23.8.3. Bonus Mission
    



}

window.onload = init;