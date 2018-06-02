import Router from 'koa-router'
import faker from 'faker/locale/zh_CN'

const router = new Router
router.get('/', ctx => {
  ctx.body = {status: 'success'}
})
router.get('/locations', async ctx => {
  ctx.body = [
    {
      name: '华中科技大学(东校区)-西门',
      pos: [114.432117, 30.518426],
    },
    {
      name: '华中科技大学(东校区)-启明学院',
      pos: [114.437334, 30.514671],
    },
  ]
})
router.get('/orders', async ctx => {
  ctx.body = new Array(10).fill({}).map(i => {
    return {
      address: faker.address.streetAddress(),
      weight: faker.random.number({min: 0, max: 10, precision: 1}),
      size: faker.random.number({min: 0, max: 10, precision: 1}),
      tel: faker.phone.phoneNumber(),
      accepted: Math.random() > 0.7,
      orderId: faker.helpers.replaceSymbolWithNumber('###########'),
    }
  })
})
export default router
