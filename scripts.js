// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = 0;
    let landButton = document.getElementById("landing");

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
            // height += 10000;
            spaceShuttleHeight.innerHTML = 10000;
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
        spaceShuttleHeight.innerHTML = 0;
    });

    
    



}

window.onload = init;