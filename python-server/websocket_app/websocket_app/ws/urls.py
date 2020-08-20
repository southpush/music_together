import json

connectionDesc = {}


async def route(scope, event, send):
    try:
        result = json.loads(event['text'])
        
        if result['type'] == 'sendOffer':
            connectionDesc[result['room']] = result['desc']
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
    