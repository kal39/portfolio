const userID = 0;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://server.kaikitagawajones.com:8080", true);
xhr.send(
  '{"page": "' +
    window.location.href +
    '",userID:' +
    userID +
    ',"alarms":' +
    localStorage.getItem("alarms") +
    "}"
);
