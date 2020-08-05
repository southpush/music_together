import json


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
            # if event['text'] == 'ping':
            #     await send({
            #         'type': 'websocket.send',
            #         'text': 'pong!'
            #     })
            try:
                # result = json.loads(event['text'])
                print("in here")
                print(scope['root_path'])
                print(scope['raw_path'])
                print(scope['query_string'])
                

            except Exception as e:
                await send({
                    "type": "websocket.send",
                    "text": e.__repr__
                })

