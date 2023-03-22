# curl -X POST 172.105.77.229:8080 -d "data"
# ssh root@172.105.77.229

from http.server import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime
import ssl


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        time = datetime.now()
        body_len = int(self.headers["Content-Length"])
        body = self.rfile.read(body_len).decode("utf-8")

        msg = str(time) + ": " + body + "\n"

        print(msg)

        f = open("log.txt", "a")
        f.write(msg)
        f.close()

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()


server = HTTPServer(('', 80), Handler)

server.socket = ssl.wrap_socket(server.socket,
                                keyfile="privkey.pem",
                                certfile="fullchain.pem", server_side=True)

server.serve_forever()
