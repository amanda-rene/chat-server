let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        message: PushManager({id, text, time})
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        const updateId = req.params.id
        const messageIndex = message.findIndex(message => message.id == updateId)

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: messageIndex.time
        }
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
    }
}