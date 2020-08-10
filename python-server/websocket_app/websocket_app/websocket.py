import json

from websocket_app.ws.urls import route


async def websocket_application(scope, receive, send):
    while True:
        event = await receive()

        if event['type'] == 'websocket.connect':
            await send({
                "type": "websocket.accept"
            })

        if event['type'] == 'websocket.disconnect':
            break

        if event['type'] == 'websocket.receive':
            try:
                # result = json.loads(event['text'])
                route(scope, receive, send)
            except Exception as e:
                await send({
                    "type": "websocket.send",
                    "text": e.__repr__
                })

