from channels.routing import ProtocolTypeRouter

application = ProtocolTypeRouter({
    # Empty for new (http -> django views is added by default)
})