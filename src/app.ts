import express from 'express'
import { authRouter } from './auth/infrastructure/http/routes/authCentral'

const app = express()

app.use(express.json)

app.use('/auth', authRouter)

app.listen(3000, ()=>{
  console.log('listening...')
})