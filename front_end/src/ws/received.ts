/**
 * 处理websocket解收到的信息
 */

let funcMap = new Map();

let MsgType =  (type: any) : any => {
    return function (target: any, methodName: any, description: any) {
        funcMap.set(type, target[methodName])
    }
}


interface ReceivedData {
    type: string;
    [propName: string]: any;
}

// @MsgType
class WsMessage {

    constructor() {};

    public received(event: MessageEvent) {
        try {
            let data = JSON.parse(event.data)
            let func = funcMap.get(data.type)
            if (func) {
                func(data)
            } else {
                // unsupport websocket message
                console.log('unsupport message ', data)
            }
        } catch (err) {
            console.log(err)
        } 
    }

    @MsgType('123')
    getAnswer(data: ReceivedData) {
        console.log(data)
    }
}

export default new WsMessage();