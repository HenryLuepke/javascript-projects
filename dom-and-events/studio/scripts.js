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
        rocket.style.top = '130px';
        rocket.style.right = '350px';
    })

    document.getElementById('missionAbort').addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = 0;
            rocket.style.top = '130px';
            rocket.style.right = '350px';
        }
    })

    document.getElementById('right').addEventListener("click", function() {
        let rocket = document.getElementById('rocket')
        let rocketStyle = window.getComputedStyle(rocket)
        let rightPosition = Number(rocketStyle.getPropertyValue('right').slice(0, -2))
        rightPosition -= 10
        rocket.style.right = rightPosition.toString() + 'px'
        console.log(rightPosition)
    })

    document.getElementById('left').addEventListener("click", function() {
        let rocket = document.getElementById('rocket')
        let rocketStyle = window.getComputedStyle(rocket)
        let rightPosition = Number(rocketStyle.getPropertyValue('right').slice(0, -2))
        rightPosition += 10
        rocket.style.right = rightPosition.toString() + 'px'
        console.log(rightPosition)
    })

    document.getElementById('up').addEventListener("click", function() {
        let rocket = document.getElementById('rocket')
        let rocketStyle = window.getComputedStyle(rocket)
        let topPosition = Number(rocketStyle.getPropertyValue('top').slice(0, -2))
        if (topPosition > 0) {
            topPosition -= 10
            rocket.style.top = topPosition.toString() + 'px'
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            let shuttleHeightNumber = Number(shuttleHeight.innerHTML)
            shuttleHeightNumber += 10000
            shuttleHeight.innerHTML = String(shuttleHeightNumber);
        }
        console.log(topPosition)
    })

    document.getElementById('down').addEventListener("click", function() {
        let rocket = document.getElementById('rocket')
        let rocketStyle = window.getComputedStyle(rocket)
        let topPosition = Number(rocketStyle.getPropertyValue('top').slice(0, -2))
        if (topPosition < 250) {
            topPosition += 10
            rocket.style.top = topPosition.toString() + 'px'
            let shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML -= 10000;
        }
        console.log(topPosition)
    })


})