import { makeRequest, getWeatherData } from "./api"
import { renderWeatherModal } from "./gui"
import { kelvinToC, kelvinToF } from './temperature'

const root = document.querySelector('main')
const request = makeRequest('city', 'Vancouver', 'Washington')
getWeatherData(request)
    .then((weather)=>{
        renderWeatherModal(weather, root, )
    })
