# Backend Lab1

## How to start locally?

1. First and foremost, you have to clone this repository:

```bash
$ git clone https://github.com/SharpDevOps10/Backend-Lab1.git
```

2. Make sure you have [Node.js](https://nodejs.org/en/). Then you have to run this command:

```bash
$ node index.js
```

3. Then you can test `/healthcheck` endpoint:

```bash
$ curl http://localhost:3000/healthcheck
```

The response will be:

```json
{
  "status": "The server is running",
  "date": "2024-09-27T18:43:59.178Z"
}
```

## How to start using Docker?

1. Make sure you have [Docker](https://www.docker.com/). Then you have to build the Docker image:

```bash
$ docker build -t <image_name>:latest .
```

2. Then you can run the Docker container:

```bash
$ docker run -it --rm -p 3000:3000 <image_name>:latest
```

## How to start using Docker compose?

1. If you have [Docker](https://www.docker.com/), thus you can also use Docker compose.
2. You can build the image and run the container using the single command:

```bash
$ docker compose up --build
```

3. Then you can down the container:

```bash
$ docker compose down
```

## Deployed project

Here is the [link](https://backend-lab1-konc.onrender.com/healthcheck) for the deployed project with `/healthcheck`
endpoint