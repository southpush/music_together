"""
Conversion functions for the NATO Phonetic Alphabet.
"""
import re
# To save a lot of typing the code words are presented here
# as a dict, but feel free to change this if you'd like.
ALPHANUM_TO_NATO = {
    "A": "ALFA",
    "B": "BRAVO",
    "C": "CHARLIE",
    "D": "DELTA",
    "E": "ECHO",
    "F": "FOXTROT",
    "G": "GOLF",
    "H": "HOTEL",
    "I": "INDIA",
    "J": "JULIETT",
    "K": "KILO",
    "L": "LIMA",
    "M": "MIKE",
    "N": "NOVEMBER",
    "O": "OSCAR",
    "P": "PAPA",
    "Q": "QUEBEC",
    "R": "ROMEO",
    "S": "SIERRA",
    "T": "TANGO",
    "U": "UNIFORM",
    "V": "VICTOR",
    "W": "WHISKEY",
    "X": "XRAY",
    "Y": "YANKEE",
    "Z": "ZULU",
    "0": "ZERO",
    "1": "ONE",
    "2": "TWO",
    "3": "TREE",
    "4": "FOUR",
    "5": "FIVE",
    "6": "SIX",
    "7": "SEVEN",
    "8": "EIGHT",
    "9": "NINER",
}


def transmit(message: str) -> str:
    """
    Convert a message to a NATO code word transmission.
    """
    message = re.sub("[^a-zA-Z0-9]", '', message).upper()
    result = ''
    for i in message:
        result += (ALPHANUM_TO_NATO[i] + ' ')
    return result[:-1]


def receive(transmission: str) -> str:
    """
    Convert a NATO code word transmission to a message.
    """
    re_ALPHANUM_TO_NATO = {v: k for k, v in ALPHANUM_TO_NATO.items()}
    transmission = transmission.split()
    result = ''
    for i in transmission:
        result += re_ALPHANUM_TO_NATO[i]
    return result 


print(transmit("Hello world!"))
