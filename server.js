const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, '/innovation/html_menu_1')))
//app.use('/static', express.static(path.join(__dirname, '/innovation/html_menu_1')))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
