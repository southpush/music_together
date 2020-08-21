# import pyaudio
# import sounddevice as sd
#
# CHUNK = 1024
# WIDTH = 2
# CHANNELS = 2
# RATE = 44100
# RECORD_SECONDS = 5
#
# p = pyaudio.PyAudio()
# print(sd.query_devices())
# input_stream = p.open(
#     format=p.get_format_from_width(WIDTH),
#     channels=CHANNELS,
#     rate=RATE,
#     input=True,
#     output=False,
#     frames_per_buffer=CHUNK,
# )
#
# output_stream_far = p.open(
#     format=p.get_format_from_width(WIDTH),
#     channels=CHANNELS,
#     rate=RATE,
#     input=False,
#     output=True,
#     frames_per_buffer=CHUNK
# )
#
# output_stream_local = p.open(
#     format=p.get_format_from_width(WIDTH),
#     channels=CHANNELS,
#     rate=RATE,
#     input=False,
#     output=True,
#     frames_per_buffer=CHUNK
# )
#
#
# input_stream.start_stream()
# output_stream_local.start_stream()
#
# while True:
#     pass
#
#

import sounddevice as sd
import socket


class SoundHandler:

    def __init__(self):
        pass

    def handler(self, indata, outdata, frames, time, status):
        outdata[:] = indata


def callback(indata, frames, time, status):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.sendto(bytes(indata), ('127.0.0.1', 1551))
    except Exception as e:
        print(e)


def start_stream():
    with sd.RawInputStream(device=1, samplerate=44100, channels=2, callback=callback) as s:
        input()


start_stream()