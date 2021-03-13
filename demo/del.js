function main(args) {
    let db = require("nim").redis()
    let key = "address:"+args.name
    return db.delAsync(key)
    .then(reply => { return {"del":reply}})
    .catch(err =>  { return {"error": err}})
}
