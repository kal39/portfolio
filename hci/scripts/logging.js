var xhr = new XMLHttpRequest();
xhr.open("POST", "https://server.kaikitagawajones.com", true);
xhr.send(
  '{"page":"' +
    window.location.href +
    '","alarms":' +
    localStorage.getItem("alarms") +
    "}"
);
