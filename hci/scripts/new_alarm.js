document.getElementById("submit-button").onclick = function() {
    alarm = {
        "name": document.getElementById("option-name").value,
        "time": document.getElementById("option-time").value,
        "timezone": document.getElementById("option-tz").value,
    }
    console.log(alarm)

    alarms = JSON.parse(localStorage.getItem("alarms"));
    alarms.push(
        {
            "name": document.getElementById("option-name").value,
            "time": document.getElementById("option-time").value,
            "timezone": document.getElementById("option-tz").value,
            "enabled": true,
        }
    );
    localStorage.setItem("alarms", JSON.stringify(alarms));
};