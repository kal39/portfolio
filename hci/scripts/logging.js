const userID = 0;

var xhr = new XMLHttpRequest();
xhr.open("POST", "http://172.105.77.229:8080", true);
xhr.send(
  '{"page": "' +
    window.location.href +
    '",userID:' +
    userID +
    ',"alarms":' +
    localStorage.getItem("alarms") +
    "}"
);
