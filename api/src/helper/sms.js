import rp from 'request-promise'
import nconf from 'nconf'

export default {
  send({code, tel}) {
    console.log(encodeURIComponent(`#code#=${code}`))
    return rp({
      uri: 'https://sms.yunpian.com/v2/sms/tpl_single_send.json',
      method: 'POST',
      form: {
        apikey: nconf.get('sms:apikey'),
        mobile: tel,
        tpl_id: nconf.get('sms:tpl_id'),
        tpl_value: encodeURIComponent('#code#') + '=' + encodeURI(code),
      }
    }).catch(err => {
      return err
    })
  }
}