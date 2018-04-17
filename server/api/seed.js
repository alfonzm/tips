import _ from 'lodash'
import { Router } from 'express'
import Category from '../models/category'
import Tip from '../models/tip'

const router = Router()

// GET all catgories
router.get('/seed/:type', function (req, res, next) {
	if(req.params.type == 'tips') {
		const tips = [
		{
			title: 'breakouts need a volume spike',
			categories: ['volume', 'breakouts']
		},
		{
			title: 'volume is awesome',
			categories: ['volume']
		},
		{
			title: 'low volume on uptrend pullback is healthy pullback',
			categories: ['volume', 'trends']
		},
		{
			title: 'stock is uptrend when price is above the MAs',
			categories: ['trends', 'moving average']
		},
		{
			title: 'trends can be upward, downward or sideways',
			categories: ['trends']
		},
		]
		Tip.create(tips, (err, tips) => {
			// Create categories
			let categories = []
			_.forEach(tips, (tip) => {
				categories = _.union(categories, tip.categories)
			})

			categories = _.map(categories, (c) => { return {name: c} })

			Category.create(categories, (err, categories) => {
				res.send({ tips, categories })
			})
		})
	}
})

export default router
