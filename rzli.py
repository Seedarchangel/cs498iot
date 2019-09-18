import socket
import re

server = socket.socket()
server.bind(('192.168.0.103',3490))
server.listen(2)
while True:
    (client, client_addr) = server.accept()
    res = ''
    while True:
        data = client.recv(1024)
        if not data:
            break
        res += data
    print len(res)
    distance = res.split('&')[0]
    led = res.split('&')[1]
    print distance
    print led

    file_name = "vans.png"
    r = re.findall("&data=(.*)", res, re.DOTALL)
    raw_img = str(r[0])


    with open(r"data", "w") as f1:
        f1.write(distance+'\n')
        f1.write(led)



    with open(file_name, 'wb') as f:
        f.write(raw_img)
    print len(raw_img)
    print "Done"