// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    document.getElementById("takeoff").addEventListener("click", function() {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000; 
        }
    })

    document.getElementById('landing').addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        shuttleHeight.innerHTML = 0;
    })

    document.getElementById('missionAbort').addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 0;
        }
    })

    document.getElementById('right').addEventListener("click", function() {
        let rocket = document.getElementById('rocket')
        rocket.style.right = parseInt(rocket.style.right.slice(0, -2)) + 10 + 'px'
        console.log(rocket.style.right.slice(0, -2))
    })
})