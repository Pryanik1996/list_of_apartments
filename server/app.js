const express = require("express");
const cors = require("cors");
const cards = require('./entities.json');

const PORT = 3001;

const app = express();


app.use(
    cors({
    origin: true,
    credentials: true,
    })
);
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        await res.json(cards);    
    } catch (error) {
        res.sendStatus(404);
    }
})

app.post("/", async (req, res) => {
    const {id} = req.body;
    try{
        await cards.response.map((el) => {
            if(el.id === id) {
                el.attributes.like.includes(id) ? el.attributes.like = [] :  el.attributes.like.push(id);
            } 
        })
        await res.json(cards);
    } catch(error) {
        res.sendStatus(404);
    }
})


app.listen(PORT, () => {
    console.log("Server has been started on PORT ", PORT);
});