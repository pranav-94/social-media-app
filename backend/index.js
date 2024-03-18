require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/index')
const cors = require('cors')

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors({
    origin:["social-media-app-gilt-omega.vercel.app/"],
    methods: ["POST","GET"],
    credentials: true
}))
app.use('/api/v1',userRouter)

app.get('/',(req,res)=>{
    res.send("hello wrodl")
})

app.listen(PORT)