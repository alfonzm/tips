import mongoose, { Schema } from 'mongoose'
import Category from './category'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug, { truncate: 50 })

var TipSchema = new Schema({
	text: String,
	title: {
		type: String,
		required: true
	},
	categories: {
		type: [String],
		require: true
	},
	slug: { type: String, slug: 'title' }
})

var Tip = mongoose.model('Tip', TipSchema);

export default Tip