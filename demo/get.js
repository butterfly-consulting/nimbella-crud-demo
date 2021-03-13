function main(args) {
    let db = require("nim").redis()
    let key = "address:"+args.name
    return db.getAsync(key)
    .then(reply => { return JSON.parse(reply)})
    .catch(err =>  { return {"error": err}})
}
