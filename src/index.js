import { makeRequest, getWeatherData } from "./api"

const request = makeRequest('city', 'Vancouver', 'Washington')
let weather = getWeatherData(request).then((w) => console.log(w))
