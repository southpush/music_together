import json

async def route(scope, event, send):
    print(event['text'])
    try:
        result = json.loads(event['text'])
        await send({
            "type": "websocket.send",
            "text": 'got it'
        })
    except Exception as e:
        await send({
                    "type": "websocket.send",
                    "text": e.__repr__()
                })
    