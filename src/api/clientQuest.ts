
import {request} from '../lib/request'

export const queryAnnnoucementList = () => {
  request.post( '/abc/cde', { a: 'aa', b: 'bb' }, {  requestOptions: { globalErrorMessage: true } })
    .then((res) => {
      console.log('👨‍🎨🎨🍑 res', res)
    })
    .catch((err) => {
      console.log('👨‍🎨🎨🍑 err 22', err)
    })
}