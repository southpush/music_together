/**
 * 管理 websocket 连接的单例模式
 */

import { wsUrl } from "../const";
import received from './received'

class Ws {
    private static instance: Ws;
    
    private wsConnection: WebSocket;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this.wsConnection = new WebSocket(wsUrl);
        this.wsConnection.onmessage = (event) => {
            received.received(event)
        }
    }

    public static getInstance() : Ws {
        if (!Ws.instance) {
            Ws.instance = new Ws()
        }
        return Ws.instance;
    }


    public send(params:any) : void {
        if (this.wsConnection.readyState === 0) {
            setTimeout(() => {
                this.send(params)
            }, 10)
            return;
        } else if (this.wsConnection.readyState === 1) {
            this.wsConnection.send(JSON.stringify(params))
        } else if (this.wsConnection.readyState === 2) {
            // todo websocket connection closing
        } else if (this.wsConnection.readyState === 3) {
            // todo websocket connection closed
        }
    }


    public sendOffer(offer: RTCSessionDescription) : any {
        return this.send({
            type: 'sendOffer',
            room: 1,
            desc: offer,
        })
    }

    public sendAnswer(answer: RTCSessionDescription) : any {
        return this.send({
            type: 'sendAnswer',
            desc: answer
        })
    }
}

export default Ws.getInstance();