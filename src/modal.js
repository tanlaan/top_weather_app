import { capitalCase } from './string'
export function getModal(weather, conversion, unit) {
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
    dataString += `The current temperature is <span class='temp'>${conversion(weather.temp)}°${unit}</span>.<br>`
    dataString += `It feels like <span class='temp'>${conversion(weather.feels_like)}°${unit}</span> though.<br>`
    dataString += `It will get up to <span class='temp'>${conversion(weather.temp_max)}°${unit}</span> today.<br>`
    dataString += `While also getting down to <span class='temp'>${conversion(weather.temp_min)}°${unit}</span>.<br>`
    data.innerHTML = dataString
    dataContainer.appendChild(data)
    
    let unitToggle = document.createElement('button')
    unitToggle.setAttribute('id', 'unit-toggle')
    if (unit === 'F') {
        unitToggle.textContent = '°C'
    } else {
        unitToggle.textContent = '°F'
    }
    unitToggle.type = 'button'
    container.appendChild(unitToggle)
    return container
}