import express from 'express';
import http from 'http';

const port = process.env.PORT || '5000';

const app = express();
const server = http.createServer(app);

app.get("/", (_, res: any) => {
    res.send({status: "OK"});
});

server.listen(port, () => {
    console.log(`Server is listening on *:${port}`);
});
