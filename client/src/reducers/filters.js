import {MASTERS_FILTERS} from '../constants'

export default (filters = {}, action) => {
  const {type, payload} = action
  // console.log('payload', payload)

  switch (type) {
    case MASTERS_FILTERS:
    return {...payload}
    default: return filters
  }
}