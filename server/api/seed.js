import _ from 'lodash'
import { Router } from 'express'
import Category from '../models/category'
import Tip from '../models/tip'

const router = Router()

// GET all catgories
router.get('/seed/:type', async function (req, res, next) {
	if(req.params.type == 'tips') {
		await Tip.remove({})
		await Category.remove({})
		const tips = [
		{
			title: 'breakouts need a volume spike long qwe asd dfg jklqwe asdqwe',
			categories: ['volume', 'breakouts'],
			text: 'breakouts need a volume spike breakouts need a volume spike breakouts need a volume spike breakouts need a volume spike'
		},
		{
			title: 'volume is awesome',
			categories: ['volume']
		},
		{
			title: 'low volume on uptrend pullback is healthy pullback',
			categories: ['volume', 'trends'],
			text: 'low volume on uptrend pullback is healthy pullbacklow volume on uptrend pullback is healthy pullbacklow volume on uptrend pullback is healthy pullbacklow volume on uptrend pullback is healthy pullbacklow volume on uptrend pullback is healthy pullbacklow volume on uptrend pullback is healthy pullback'
		},
		{
			title: 'stock is uptrend when price is above the MAs',
			categories: ['trends', 'moving average']
		},
		{
			title: 'trends can be upward, downward or sideways',
			categories: ['trends']
		},
		{
			title: 'alignment of the stars is when ma20 > ma50 > ma100',
			categories: ['moving average']
		}
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
