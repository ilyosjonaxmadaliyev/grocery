import express from 'express'
import { getGroceries } from '../controllers/groceryController'

const groseryRouter = express.Router()


groseryRouter.get('/', getGroceries )

export default groseryRouter