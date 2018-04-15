import mongoose, { Schema } from 'mongoose'

var CategorySchema = new Schema({
	name: String,
	categories: [{ type: Schema.Types.ObjectId, ref: 'Tip' }]
})

var Category = mongoose.model('Category', CategorySchema);

export default Category