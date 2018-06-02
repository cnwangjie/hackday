import Router from 'koa-router'

const router = new Router
router.get('/', ctx => {
  ctx.body = {status: 'success'}
})
const locationsDatas = [
  {
    name: '华中科技大学(东校区)-西门',
    pos: [114.432117, 30.518426],
  },
  {
    name: '华中科技大学(东校区)-启明学院',
    pos: [114.437334, 30.514671],
  },
]
router.get('/locations', async ctx => {
  ctx.body = locationsDatas
})

export default router
