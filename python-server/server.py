import socketserver


class MyTCPHandler(socketserver.DatagramRequestHandler):

    def handle(self):
        # self.rfile is a file-like object created by the handler;
        # we can now use e.g. readline() instead of raw recv() calls
        data = self.rfile.read(10000)
        print(len(data))
        self.wfile.write(f"recv".encode('utf-8'))


if __name__ == "__main__":
    HOST, PORT = "localhost", 1551

    # Create the server, binding to localhost on port 9999
    with socketserver.UDPServer((HOST, PORT), MyTCPHandler) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        server.serve_forever()

