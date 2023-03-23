id = new URLSearchParams(window.location.search).get("id");
mode = new URLSearchParams(window.location.search).get("mode");
mode = mode != null ? mode : 1;

if (id < JSON.parse(localStorage.getItem("alarms")).length) {
  alarms = JSON.parse(localStorage.getItem("alarms"));
  document.getElementById("option-name").value = alarms[id].name;
  document.getElementById("option-time").value = alarms[id].time;
  document.getElementById("option-tz").value = alarms[id].timezone;
  document.getElementById("title").innerHTML = "Edit alarm";
}

if (mode == 1) {
  document.getElementById("back-button").href = "home.html?mode=" + mode;
  document.getElementById("submit-button").href = "home.html?mode=" + mode;
  document.getElementById("submit-button").onclick = () => {
    submit();
    window.location.href = "home.html?mode=" + mode;
  };
} else if (mode == 2) {
  state = 1;
  start_name_section();

  function start_name_section() {
    console.log("name");
    document.getElementById("name-section").style.display = "flex";
    document.getElementById("time-section").style.display = "none";
    document.getElementById("options-section").style.display = "none";
    document.getElementById("back-button").onclick = () => {
      window.location.href = "home.html?mode=" + mode;
    };
    document.getElementById("submit-button").onclick = start_time_section;
  }

  function start_time_section() {
    console.log("time");
    document.getElementById("name-section").style.display = "none";
    document.getElementById("time-section").style.display = "flex";
    document.getElementById("options-section").style.display = "none";
    document.getElementById("back-button").onclick = start_name_section;
    document.getElementById("submit-button").onclick = () => {
      time = document.getElementById("option-time").value;
      if (confirm("The time is set to " + time + ", continue?")) {
        start_options_section();
      } else {
        start_time_section();
      }
    };
  }

  function start_options_section() {
    console.log("options");
    document.getElementById("name-section").style.display = "none";
    document.getElementById("time-section").style.display = "none";
    document.getElementById("options-section").style.display = "flex";
    document.getElementById("back-button").onclick = start_time_section;
    document.getElementById("submit-button").onclick = () => {
      timezone = document.getElementById("option-tz").value;
      if (
        confirm(
          "The timezone is set to " +
            timezone +
            "\nand the alarm will go off in __h __m __s\ncontinue?" +
            "\n(the `__`s are placeholders)"
        )
      ) {
        submit();
        window.location.href = "home.html?mode=" + mode;
      } else {
        start_options_section();
      }
    };
  }
}

function submit() {
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
}
