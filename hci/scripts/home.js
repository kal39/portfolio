const alarmTemplate =
  document.getElementById("alarm-template").firstElementChild;
const alarmList = document.getElementById("alarm-list");

if (localStorage.alarms == undefined) {
  alarms = [
    { name: "Wake up", time: "08:00:00", timezone: "CET", enabled: true },
    {
      name: "Join meeting A",
      time: "12:30:00",
      timezone: "UTC",
      enabled: true,
    },
    {
      name: "Join meeting B",
      time: "13:00:00",
      timezone: "UTC",
      enabled: false,
    },
  ];
  localStorage.setItem("alarms", JSON.stringify(alarms));
}

alarms = JSON.parse(localStorage.getItem("alarms"));

for (id = 0; id < alarms.length; id++) {
  addAlarm(alarms[id].name, alarms[id].time, alarms[id].timezone, id);
}

document
  .getElementById("new-alarm-button")
  .setAttribute("href", "edit_alarm.html?id=" + alarms.length);

function addAlarm(name, time, timezone, id) {
  alarm = alarmList.appendChild(alarmTemplate.cloneNode(true));
  alarm.querySelector(".alarm-name").innerHTML = name;
  alarm.querySelector(".alarm-hhmmss").innerHTML = time;
  alarm.querySelector(".alarm-tz").innerHTML = timezone;
  alarm
    .querySelector("#settings-button")
    .setAttribute("href", "edit_alarm.html?id=" + id);
  alarm.querySelector(".enable-disable").onclick = function () {
    alarms = JSON.parse(localStorage.getItem("alarms"));
    alarms[id].enabled = !alarms[id].enabled;
    localStorage.setItem("alarms", JSON.stringify(alarms));
    updateAlarmButton(id, alarms[id].enabled);
  };

  updateAlarmButton(id, alarms[id].enabled);
  return alarm;
}

function updateAlarmButton(id, enabled) {
  alarm = alarmList.children[id];
  if (enabled) {
    alarm.querySelector(".enable-disable").innerHTML =
      '<i class="fas fa-toggle-on"></i>';
    alarm.querySelector(".enable-disable").style.color = "#348745";
  } else {
    alarm.querySelector(".enable-disable").innerHTML =
      '<i class="fas fa-toggle-on fa-rotate-180"></i>';
    alarm.querySelector(".enable-disable").style.color = "#C9364C";
  }
}
