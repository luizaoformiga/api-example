import express from 'express';

const router = express.Router();

router.get('/', (request, response) => response.json([
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

export default router;