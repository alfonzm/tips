import mongoose, { Schema } from 'mongoose'
import { isEmail } from 'validator'

var UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		validate: [ isEmail, 'Invalid email format.' ],
	},
	provider: String,
	tips: [{ type: Schema.Types.ObjectId, ref: 'Tip' }],
})

var User = mongoose.model('User', UserSchema);

export default User