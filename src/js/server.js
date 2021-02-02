const express = require('express');
const cors = require('cors');

const app = express();
const port = 8009;

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

app.listen(port, () => console.log('API listering to port http://localhost:8009'));