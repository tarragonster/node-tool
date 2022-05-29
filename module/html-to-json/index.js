import fs from 'fs'
import {parse} from 'himalaya'
const html = fs.readFileSync('./module/html-to-json/input/1.html', {encoding: 'utf8'})
const json = parse(html)
console.log('👉', json)