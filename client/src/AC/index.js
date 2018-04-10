import {GET_MASTERS, MASTERS_FILTERS} from  '../constants'

export function getMasters(payload) {
    return {
        type: GET_MASTERS,
        payload
    }
}

export function setFilters(payload) {
    console.log('setFilters payload')
    return {
        type: MASTERS_FILTERS,
        payload
    }
}