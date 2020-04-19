import socket


# Create a socket (SOCK_STREAM means a TCP socket)
with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
    # Connect to server and send data
    while True:
        i = input()
        if i == 'exit':
            break
        else:
            sock.sendto(i.encode('utf-8'), ("127.0.0.1", 1551))
        print("Sent:     {}".format(i))
        received = str(sock.recv(1024), "utf-8")
        print("Received: {}".format(received))

    # Receive data from the server and shut down


