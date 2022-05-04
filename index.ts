import express from 'express'
const app = express()
import 'dotenv/config'

import create from './controllers/create'
import getquestions from './controllers/getquestion'

app.get('/',(req,res)=>{
    res.send('what questions do you have?')
})

app.use('/question', create)
app.use('/question', getquestions)

let port = process.env.port || 3080
app.listen(port,()=>{console.log(`at port ${port}`)})