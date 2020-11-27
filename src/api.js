import { apiKey } from "./secrets"

export function makeRequest(endpoint, ...values) {
    try {
        if (endpoint === "city"){
            return _makeCityRequest(values)
        } else {
            throw new Error('No matching endpoint of that type.')
        }
    }
    catch (err) {
        console.log(err)
        return ''
    }
    
}

function _makeCityRequest(values) {
    try {
        if (values.length === 0) {
            throw new Error('Needed values for City Request not passsed.')
        } else if (values.length > 3) {
            throw new Error('Too many values for City Request passed.')
        }
        let requestValues = values.reduce((reqStr, value) => {
            if (reqStr === ''){
                return reqStr += value
            } else {
                return reqStr += ',' + value
            }
        }, '')
        let requestBase = 'api.openweathermap.org/data/2.5/weather?q='
        let requestTail = `&appid=${apiKey}`
        return requestBase + requestValues + requestTail
    }
    catch (err) {
        console.log(err)
        return ""
    }
}