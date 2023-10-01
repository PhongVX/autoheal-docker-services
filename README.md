# autoheal-docker-services
## Introduction
After trying to search the solution on Google for service recovery, I found a great solution: we will use willfarrell/autoheal to monitor our containers, which have labels that are autoheal. Whenever the container status is unhealthy by health checking itself or for some reason the container is down, the willfarrell/autoheal container will try to restart that container to make it live again. 

You can base your work on this sample repository. Below are the instructions.

## Build docker server
Go to the server folder

```cd server```

Install dependencies

```yarn```

Build

```yarn build```

Build docker image

```sudo docker build -t my-simple-server .```

## Run
After having the my-simple-server container, you can run the my-simple-server and willfarrell/autoheal by using docker-compose. You can have a look at the docker-compose.yml file to get more details.

```sudo docker-compose up```

## Testing
List of the docker containers are running

```sudo docker ps```

Pick the simple server container id and pause that container by this command:

```docker pause <simple-server-container-id>```

Trying to access http://localhost:5000, we cannot access it because the container was paused. After waiting for 1 minute and accessing the URL again, the http://localhost:5000 will become healthy, and then we can access it normally. 
## Environment
```AUTOHEAL_INTERVAL``` It's a period of time in seconds to do the health checking for other containers.