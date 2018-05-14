import mongoose, { Schema } from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug, { truncate: 50 })

var CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	tips: [{ type: Schema.Types.ObjectId, ref: 'Tip' }],
	slug: { type: String, slug: 'name' }
})

var Category = mongoose.model('Category', CategorySchema);

export default Category