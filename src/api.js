import { apiKey } from "./secrets"

export async function getWeatherData(request) {
    let response = await fetch(request, { mode: 'cors' })
    let query = await response.json()
    let weatherData = {}
    weatherData = query.main
    weatherData['type'] = query.weather[0].main
    weatherData['desc'] = query.weather[0].description
    return weatherData
}

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
        let requestBase = 'https://api.openweathermap.org/data/2.5/weather?q='
        let requestTail = `&appid=${apiKey}`
        return requestBase + requestValues + requestTail
    }
    catch (err) {
        console.log(err)
        return ""
    }
}

function kelvinToCelcius(k) {
    return (k - 273.15)
}

function celciusToF(c) {
    return ((c * (9.0/5.0)) + 32)
}

function fahrenheitToC(f) {
    return ((f - 32) / (9.0/5.0))
}