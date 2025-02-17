import os

import eel
  
from Engine.Features import *

eel.init('frontend') # To point this library we write this


playAssistantSound()

# To open app mode for our project any browser provide app mode
os.system('start msedge.exe --app="http://localhost:8000/index.html" ');

#   To tell which one is frontend file 

eel.start('index.html', mode=None, host='localhost',block=True)