import json

roomMate = {}
connection = {}

async def route(scope, event, send):
    try:
        result = json.loads(event['text'])
        connection[scope['headers'][10][1]] = send
        
        if result['type'] == 'sendOffer':
            # connectionDesc[result['room']] = result['desc']
            if len(connection):
                for i in connection:
                    await connection[i]({
                        "type": "websocket.send",
                        "text": json.dumps({
                            "desc": result['desc'],
                            "text": 'get it '
                        })
                    })
        elif result['type'] == 'sendAnswer':
            connectionDesc['']


        await send({
            "type": "websocket.send",
            "text": json.dumps({
                "d": 12,
                "a": 123,
            })
        })
    except Exception as e:
        print(e)
        await send({
                    "type": "websocket.send",
                    "text": e.__repr__()
                })
    