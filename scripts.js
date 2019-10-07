// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    // When the "Take off" button is clicked, the following should happen:
    // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add steps 2-4.
    let takeOffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = 0;

    takeOffButton.addEventListener("click",function(){
        let shuttleReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (shuttleReady){
            // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight";
            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleFlightScreen.style.background = "blue";
            // The shuttle height should increase by 10,000 miles.
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
        }

    });
    



}

window.onload = init;