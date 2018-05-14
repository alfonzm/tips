import { Router } from 'express'
import Category from '../models/category'
import Tip from '../models/tip'

const router = Router()

// GET all catgories
router.get('/tips', function (req, res, next) {
  Tip.find(req.query, (err, tips) => {
    res.json(tips)
  })
})

// GET tip data
router.get('/tips/:id', function (req, res, next) {
  Tip.find({ _id: req.params.id }, (err, categories) => {
    res.json(categories)
  })
})

// POST tips
router.post('/tips', function (req, res, next) {
  const name = req.params.name
  Tip.create({}, (err, categories) => {
    res.json(categories)
  })
})

export default router