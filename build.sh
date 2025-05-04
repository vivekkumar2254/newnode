#!/bin/bash
IMAGE_NAME="my-node-app"
TAG="latest"

# Clean up any old containers with the same name
docker rm -f node_app_container || true

# Build the Docker image
docker build -t $IMAGE_NAME:$TAG .

# Run the Docker container
docker run -d -p 3000:3000 --name node_app_container $IMAGE_NAME:$TAG
