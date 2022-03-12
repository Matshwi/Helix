import cv2 
import os
from PIL import Image


image = Image.open('4.png')
new_image = image.resize((80, 80))
new_image.save('4.png')

