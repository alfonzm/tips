import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Nuxt, Builder } from 'nuxt'
import passport from 'passport'
import morgan from 'morgan'
import User from './models/user'

const TwitterStrategy = require('passport-twitter').Strategy

import api from './api'

require('dotenv').config()

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.use(morgan('tiny'))

// Setup express app
app.use(express.static('public'))
app.use(session({ secret: 'cats' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

// Setup Mongoose
mongoose.connect('mongodb://localhost/tips');

mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongodb connected!')
});






// Setup Passport Twitter
passport.use(new TwitterStrategy({
	consumerKey: process.env.TWITTER_CONSUMER_KEY,
	consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
	callbackURL: "http://localhost:3000/auth/twitter/callback",
	userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
},
function(token, tokenSecret, profile, done) {
	const provider = profile.provider
	const userProfile = profile._json

	User.findOne({ email: profile._json.email }, function(err, user) {
		if (err) { return done(err) }

		if (!user) {
			user = new User({
				name: userProfile.name,
				email: userProfile.email,
				provider: provider,
			})

			user.save(err => {
				if (err) { console.log(err) }
				return done(err, user)
			})
		}
	})
})
)

passport.serializeUser((user, done) => { done(null, user) })
passport.deserializeUser((user, done) => { done(null, user) })

app.get('/auth/twitter', passport.authenticate('twitter'))
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req,res) => {
	res.redirect('/')
})

// Import API Routes
app.use('/api', api)





// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
