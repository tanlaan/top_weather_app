import { kelvinToC, kelvinToF } from './temperature'

export function renderWeatherModal(weather, location, unit = 'f' ) {
    console.log(weather)
    _removeChildren(location)
    let conversion = getUnitFunction(unit)    

    let container = document.createElement('div')
    container.setAttribute('id', 'weather-modal')

    let title = document.createElement('h1')
    title.textContent = weather.type
    container.appendChild(title)

    let subtitle = document.createElement('h2')
    subtitle.textContent = weather.desc
    container.appendChild(subtitle)

    let dataContainer = document.createElement('div')
    dataContainer.setAttribute('id', 'weather-data')
    container.appendChild(dataContainer)

    let data = document.createElement('p')
    let dataString = ''
    dataString += `The current temperature is ${conversion(weather.temp)}°.<br>`
    dataString += `It feels like ${conversion(weather.feels_like)}° though.<br>`
    dataString += `It will get up to ${conversion(weather.temp_max)}° today.<br>`
    dataString += `While also getting down to ${conversion(weather.temp_min)}°.<br>`
    data.innerHTML = dataString
    dataContainer.appendChild(data)

    location.appendChild(container)
}

function getUnitFunction(unit) {
    try {
        if (unit === 'c') {
            return kelvinToC
        } else if (unit === 'f') {
            return kelvinToF
        } else {
            throw new Error('Unknown unit string passed.')
        }
    }
    catch (err) {
        console.log(err)
    }
}

function _removeChildren(location) {
    while(location.firstChild) {
        location.removeChild(location.lastChild)
    }
}