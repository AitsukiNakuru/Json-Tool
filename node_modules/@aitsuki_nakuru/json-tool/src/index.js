const fs = require('fs')
const path = require('path')


class JsonTool {
  jsonPath
  jsonData
  jsonKeys
  constructor(jsonPath) {
    jsonPath = path.normalize(jsonPath);
    this.jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
    this.jsonPath = jsonPath
    this.jsonKeys = Object.keys(this.jsonData)
  }


  updateSelf() {
    this.jsonKeys = Object.keys(this.jsonData)
    let jsonBuffer = Buffer.from(JSON.stringify(this.jsonData))
    fs.writeFileSync(this.jsonPath, jsonBuffer, 'utf-8')
    return this.jsonData
  }

  get(key) {
    return this.jsonData[key]
  }

  set(key, value) {
    key = key.toString()
    this.jsonData[key] = value
    return this.updateSelf()
  }

}






module.exports = JsonTool

