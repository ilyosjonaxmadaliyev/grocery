import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import db from './config/db'
import groseryRouter from './routes/groceryRoutes'

dotenv.config()
db()

const app = express()
app.use(cors())
app.use( express.json() )

app.use('/grocery', groseryRouter)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)
)