import sounddevice as sd


def callback(indata, outdata, frames, time, status):
    outdata[:] = indata


with sd.RawStream(device=(2, 6), samplerate=44100, channels=2, callback=callback) as s:
    input()




