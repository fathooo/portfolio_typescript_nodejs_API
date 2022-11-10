import express from 'express'
import diaryRouter from './routes/diaries'
import healthRouter from './routes/health'
const app = express()

app.use(express.json()) // for parsing application/json

const IP = process.env.IP ?? '127.0.0.1'
const PORT = '3000'

app.use('/health', healthRouter)
app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port http://${IP}:${PORT}`)
})
