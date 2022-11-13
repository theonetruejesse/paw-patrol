import requests

#API KEY: EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY
#UUID:    f21c4f1b-1790-4c57-9820-17bd1c75bc3b
#CID:     QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn


#create the collection
headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY',
    'Content-Type': 'application/x-www-form-urlencoded',
}

data = '{"name":"This is a collection of all the videos", "description":"Inside the collection you will find an aiv file, time, and location"}'

response = requests.post('https://api.estuary.tech/collections/', headers=headers, data=data)

print("done")


# Add to it


headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY',
    # requests won't add a boundary if this header is set when you pass files=
    # 'Content-Type': 'multipart/form-data',
}

files = {
    'data': open('filename5.avi', 'rb'),
}

response = requests.post('https://upload.estuary.tech/content/add?coluuid=f21c4f1b-1790-4c57-9820-17bd1c75bc3b&dir=/I_think/', headers=headers, files=files)

# Commit it

headers2 = {
    'Authorization': 'Bearer EST02fee50c-68e8-46b2-8839-ccdc677bda04ARY',
    'Accept': 'application/json',
}

response = requests.post('https://api.estuary.tech/collections/f21c4f1b-1790-4c57-9820-17bd1c75bc3b/commit', headers=headers2)
print("done")
