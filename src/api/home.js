import {
    getRequest
} from '../utils/http.js'

export const getCeshi = params => getRequest('url', params);