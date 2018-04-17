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

// GET single category
router.get('/categories/:name', function (req, res, next) {
  const name = req.params.name
  Category.findOne({ name: name }, (err, category) => {
  	if (err) { res.send(err) }
  	if (!category) {
  		res.sendStatus(404)
  	} else {
	    res.json(category)
  	}
  })
})

// GET tips of category
router.get('/categories/:name/tips', function (req, res, next) {
  const name = req.params.name
  Category.findOne({ name: name }).populate('tips').exec((err, category) => {
    if (err) { res.send(err) }
  	if (!category) {
  		res.sendStatus(404)
  	} else {
	    res.json(category)
  	}
  })
})

// router.get('/categories/seed', function (req, res, next) {
//   let c = new Category({ name: 'volume' })
//   c.save((err, c) => {
//     if (err) res.json(err, 500)
//   })
//   let c1 = new Category({ name: 'moving averages' })
//   c1.save((err, c) => {
//     if (err) res.json(err, 500)
//   })
//   let c2 = new Category({ name: 'breakouts' })
//   c2.save((err, c) => {
//     if (err) res.json(err, 500)
//   })
//   let c3 = new Category({ name: 'macd' })
//   c3.save((err, c) => {
//     if (err) res.json(err, 500)
//   })
//   let c4 = new Category({ name: 'rsi' })
//   c4.save((err, c) => {
//     if (err) res.json(err, 500)
//   })
//   let c5 = new Category({ name: 'price' })
//   c5.save((err, c) => {
//     if (err) res.json(err, 500)
//     res.json(c5)
//   })
// })

export default router
