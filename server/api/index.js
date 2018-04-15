import { Router } from 'express'

import users from './users'
import categories from './categories'
import tips from './tips'

const router = Router()

router.use(users)
router.use(categories)
router.use(tips)

export default router
