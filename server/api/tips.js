import { Router } from 'express'
import Category from '../models/category'
import Tip from '../models/tip'

const router = Router()

// GET all catgories
router.get('/tips', function (req, res, next) {
  Tip.find({}, (err, tips) => {
    res.json(tips)
  })
})

// GET tips of Tip
router.get('/tips/:name/tips', function (req, res, next) {
  const name = req.params.name
  Tip.find({}, (err, categories) => {
    res.json(categories)
  })
})

export default router
