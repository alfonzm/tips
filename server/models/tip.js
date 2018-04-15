import mongoose, { Schema } from 'mongoose'

var TipSchema = new Schema({
	name: String,
	categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

var Tip = mongoose.model('Tip', TipSchema);

export default Tip