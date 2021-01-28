const express = require ('express')
const mc = require ('./controllers/controllers/message_controller')
const app = express()

const port = 3001

app.use(express.json())

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})