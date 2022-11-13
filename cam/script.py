# Python program to save a video using OpenCV
import cv2
import numpy as np
import time
import requests


# Create an object to read from camera
video = cv2.VideoCapture(0)

# We need to check if camera is opened previously or not
if (video.isOpened() == False):
	print("Error reading video file")
	quit()

# We need to set resolutions. so, convert them from float to integer.
frame_width = int(video.get(3))
frame_height = int(video.get(4))
size = (frame_width, frame_height)

# Below VideoWriter object will create a frame of above defined The output is stored in 'filename.avi' file.
result = []
rNum = 0
result.append(cv2.VideoWriter(f'filename{rNum}.mp4', cv2.VideoWriter_fourcc(*'MP4V'), 10, size))

	
#Motion
last_mean = 0
detected_motion = False
frame_rec_count = 0


while(True):
    ret, frame = video.read()

    gray= cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    check = np.abs(np.mean(gray) - last_mean)
    last_mean = np.mean(gray)

    if check >0.3:
        print(f'Motion detected! {frame_rec_count}\n')
        #print("Started recording!")
        t_end = time.time() + 10
        while time.time() < t_end:
            ret, frame = video.read()
            result[rNum].write(frame)
            # Display the frame saved in the file
            cv2.imshow('Frame', frame)
        cv2.imshow('Frame', frame)
        frame_rec_count = 0
        #release the videos
        #video.release()
        result[rNum].release()
        
        # Add to it
        headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY',
        }

        files = {
            'data': open(f'filename{rNum}.mp4', 'rb'),
        }

        response = requests.post('https://upload.estuary.tech/content/add?coluuid=f21c4f1b-1790-4c57-9820-17bd1c75bc3b&dir=/Final/', headers=headers, files=files)


        # Commit it

        headers2 = {
            'Authorization': 'Bearer EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY',
            'Accept': 'application/json',
        }

        response = requests.post('https://api.estuary.tech/collections/f21c4f1b-1790-4c57-9820-17bd1c75bc3b/commit', headers=headers2)
        print("Added to Estuary")
        print("Linked with Verbwire token")

        rNum +=1
        result.append(cv2.VideoWriter(f'filename{rNum}.mp4', cv2.VideoWriter_fourcc(*'MP4V'), 10, size))
        print("The video was successfully saved")
    if (cv2.waitKey(1) & 0xFF == ord('q')):
        break
        
	
# Closes all the frames
cv2.destroyAllWindows()


