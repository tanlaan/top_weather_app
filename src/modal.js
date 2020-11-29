import { capitalCase } from './string'
export function getModal(weather, conversion) {
    let container = document.createElement('div')
    container.setAttribute('id', 'weather-modal')

    let title = document.createElement('h1')
    title.textContent = weather.type
    container.appendChild(title)

    let subtitle = document.createElement('h2')

    subtitle.textContent = capitalCase(weather.desc)
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
    
    return container
}