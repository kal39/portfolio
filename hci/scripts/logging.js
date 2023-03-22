const userID = 0;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://server.kaikitagawajones.com", true);
xhr.send(
  '{"page": "' +
    window.location.href +
    '",userID:' +
    userID +
    ',"alarms":' +
    localStorage.getItem("alarms") +
    "}"
);
