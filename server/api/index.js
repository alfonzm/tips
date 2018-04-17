import { Router } from 'express'

import users from './users'
import categories from './categories'
import tips from './tips'
import seed from './seed'

const router = Router()

router.use(users)
router.use(categories)
router.use(tips)
router.use(seed)

export default router
