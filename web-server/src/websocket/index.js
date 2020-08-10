let baseUrl = process.env.VUE_APP_WS_BASE_URL || ""

class WsConnection {
    url = '';
    connection;
    constructor(url) {
        this.url = url
        this.connection = new WebSocket(url)
        this.connection.onmessage = (event) => {
            try {
                let res = JSON.parse(event.data)
            } catch (err) {
                console.log(err)
            }

        }
    }
    send(data) {
        const waitForSocketConnection = (socket, callback) => {
            setTimeout(
                () => {
                    if (socket.readyState === 1) {
                        if (callback != null) {
                            callback()
                        }
                    } else {
                        waitForSocketConnection(socket, callback)
                    }
                }, 5
            )
        }

        if (this.connection.readyState === 0) {
            waitForSocketConnection(this.connection, () => {
                this.send(data)
            })
        } else if (this.connection.readyState === 1) {
            this.connection.send(JSON.stringify(data))
        } else {
            // 错误处理
        }
    }
}

let connection = new WsConnection(baseUrl)


export default connection;