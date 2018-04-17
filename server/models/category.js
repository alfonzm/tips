import mongoose, { Schema } from 'mongoose'

var CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	tips: [{ type: Schema.Types.ObjectId, ref: 'Tip' }]
})

var Category = mongoose.model('Category', CategorySchema);

export default Category