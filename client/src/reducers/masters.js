import { masters as defaultMasters } from '../data'
import {GET_MASTERS} from '../constants'

export default (masters = defaultMasters, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MASTERS: return [...payload];
    default: return masters
  }
}