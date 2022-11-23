const JsonTool = require('./src/index')
const path = require('path')
// console.log(jsonTool.setJsonPath(path.resolve(__dirname, "src/TestJson.json")))
// console.log(jsonTool)

//console.log(jsonTool.set("name", "lin"))

let jsonTool = new JsonTool(path.resolve(__dirname, "src/TestJson.json"))
console.log(jsonTool)
console.log(jsonTool.get("name"))
console.log(jsonTool.set("age", 19))

