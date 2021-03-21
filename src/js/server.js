import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8009;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => console.log(`API listering to port: ${port}`));