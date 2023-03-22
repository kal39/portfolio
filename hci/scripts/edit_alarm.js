const id = new URLSearchParams(window.location.search).get("id");

if (id < JSON.parse(localStorage.getItem("alarms")).length) {
  alarms = JSON.parse(localStorage.getItem("alarms"));
  document.getElementById("option-name").value = alarms[id].name;
  document.getElementById("option-time").value = alarms[id].time;
  document.getElementById("option-tz").value = alarms[id].timezone;
  document.getElementById("title").innerHTML = "Edit alarm";
}

document.getElementById("submit-button").onclick = function () {
  alarm = {
    name: document.getElementById("option-name").value,
    time: document.getElementById("option-time").value,
    timezone: document.getElementById("option-tz").value,
  };
  console.log(alarm);

  alarms = JSON.parse(localStorage.getItem("alarms"));
  alarms[id] = {
    name: document.getElementById("option-name").value,
    time: document.getElementById("option-time").value,
    timezone: document.getElementById("option-tz").value,
    enabled: true,
  };
  localStorage.setItem("alarms", JSON.stringify(alarms));
};
