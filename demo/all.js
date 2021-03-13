function main() {
    let db = require("nim").redis()
    return db.keysAsync("address:*")
    .then(reply => {
        console.log(reply)
        return reply.length ? db.mgetAsync(reply) : [] })
    .then(reply => { return { "data": reply.map(JSON.parse) }})
    .catch(err => { return { "error": err}})
}

