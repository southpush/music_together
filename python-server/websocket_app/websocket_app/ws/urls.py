
def route(scope, receive, send):
    print(scope['raw_path'])
    print(scope)
    print(scope['query_string'])
    print(scope['raw_path'])
    pass