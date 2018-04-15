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

router.get('/tips/create', function (req, res, next) {
  Category.findOne({}, (err, category) => {
    let tip = new Tip({
    	name: 'Volumes are awesome',
    	categories: [category._id]
    })
    tip.save((err, tip) => {
      if (err) res.json(err, 500)
      res.json(tip)
    })
  })
})

export default router
