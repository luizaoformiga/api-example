import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8009;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (request, response) => response.json([
    {
        "id": 1,
        "type": "duel",
        "Status": "winner",
        "oponents": 
            {
                "number": 1,
                "position": 1,
                "result": "win",
                "classification": 3,
                "forfeit": false,
                "pontuation": 15,
                "proprity": {}
            },
        "proprity": {}
    }
]))

app.listen(port, () => console.log(`API listering to port: ${port}`));