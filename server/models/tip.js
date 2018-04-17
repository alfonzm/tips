import mongoose, { Schema } from 'mongoose'
import Category from './category'

var TipSchema = new Schema({
	text: String,
	title: {
		type: String,
		required: true
	},
	categories: {
		type: [String],
		require: true
	}
})

var Tip = mongoose.model('Tip', TipSchema);

export default Tip