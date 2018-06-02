import Router from 'koa-router'
import faker from 'faker/locale/zh_CN'
import sms from '../helper/sms'

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
      way: '自提',
      code: faker.helpers.replaceSymbolWithNumber('######'),
      weight: faker.random.number({min: 1, max: 10, precision: 3}),
      size: faker.random.number({min: 1, max: 10, precision: 3}),
      tel: '17612730351',
      accepted: Math.random() > 0.7,
      orderId: faker.helpers.replaceSymbolWithNumber('###########'),
    }
  })
})
router.post('/sms/send', async ctx => {
  const input = ctx.input()
  console.log(input)
  const res = await sms.send({
    code: input.code,
    tel: input.tel,
  })
  ctx.body = res
})

export default router
