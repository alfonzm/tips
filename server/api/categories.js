import { Router } from 'express'
import Category from '../models/category'

const router = Router()

const categories = ['test', 'hello']

// GET all catgories
router.get('/categories', function (req, res, next) {
  Category.find({}, (err, categories) => {
    res.json(categories)
  })
})

// GET tips of category
router.get('/categories/:name/tips', function (req, res, next) {
  const name = req.params.name
  Category.find({}, (err, categories) => {
    res.json(categories)
  })
})

// router.get('/categories/create', function (req, res, next) {
//   Category.find({}, (err, categories) => {
//     let c = new Category({ name: 'volume' })
//     c.save((err, c) => {
//       if (err) res.json(err, 500)
//       res.json(c)
//     })
//   })
// })

export default router
