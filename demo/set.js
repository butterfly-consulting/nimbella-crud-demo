function main(args) {
    let db = require("nim").redis()
    let key = "address:"+args.name
    let value = JSON.stringify({
            "name": args.name || "",
            "company":  args.company  || "",
            "phone": args.phone || ""
    })
    return db.setAsync(key, value)
    .then(reply => { return {"set": reply}})
    .catch(err =>  { return {"error": err}})
}
