import sys
import pyperclip
from socketIO_client import SocketIO, LoggingNamespace

socket = None
sid = None

def connect_response(*args):
    print "socket connected"

def msg_response(*args):
    print "Adding %s to the clipboard" % args[0]
    pyperclip.copy(args[0])

def id_response(*args):
    global socket
    global sid
    if sid is None:
        sid = args[0]
    print "My id is: %s" % sid
    socket.on(sid+"", msg_response)

global socket
global sid
socket = SocketIO(sys.argv[1], 80, LoggingNamespace)
sid = sys.argv[2]# or None
socket.on('connect', connect_response)
socket.on('id', id_response)
socket.wait()
