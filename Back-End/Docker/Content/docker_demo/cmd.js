// Advanced Package Tool
// sudo apt update
// sudo apt upgrade -y
// sudo apt install docker.io -y
// docker --version
// docker run hello-world
// docker ps
// docker run hello-world
// docker images
// docker pull redis
// docker run redis
// docker run -d redis
// docker ps -a
// docker stop container_id
// docker start container_id
// docker rm container_id
// docker start -ai bb29451e5eaa
// docker exec -it container_id bash
// docker run -d --name myredis redis
// docker exec -it myredis redis-cli
// docker run -d \
// --name mymongo \
// -p 27017:27017 \
// mongo
// docker exec -it mymongo mongosh
// show dbs
// use testdb
// docker run -d --name mongo1 -p 27017:27017 mongo

// docker network create app-network
// docker run -d \
// --name mongo \
// --network app-network \
// mongo
// docker run -d \
// --name redis \
// --network app-network \
// redis
// docker run -d \
// --name nodeapp \
// --network app-network \
// -p 3000:3000 \
// node-app
// docker compose up -d
// cd "/mnt/c/Users/Mostafa Tarek/Desktop/docker_demo"
// sudo docker build -t my-node-app .