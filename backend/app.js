import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${__dirname}/./../.env` });

const app = express();
const port = process.env.ENDPOINT_PORT;

var corsOptions = {
    origin: `http://localhost:3000`
}

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => console.log(`App server listening on port ${ port }!`));