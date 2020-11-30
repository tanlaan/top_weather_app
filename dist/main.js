/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/temperature.js
function kelvinToC(k) {
    return (k - 273.15).toFixed(2)
}

function kelvinToF(k) {
    let c = kelvinToC(k)
    return celciusToF(c).toFixed(2)
}

function celciusToF(c) {
    return ((c * (9.0/5.0)) + 32)
}

function fahrenheitToC(f) {
    return ((f - 32) / (9.0/5.0))
}
;// CONCATENATED MODULE: ./src/unit.js


function getUnitFunction(unit) {
    try {
        if (unit === 'C') {
            return kelvinToC
        } else if (unit === 'F') {
            return kelvinToF
        } else {
            throw new Error('Unknown unit string passed.')
        }
    }
    catch (err) {
        console.log(err)
    }
}
;// CONCATENATED MODULE: ./src/string.js
function capitalCase(phrase) {
    let capitalized = phrase.split('')
    capitalized[0] = capitalized[0].toUpperCase()
    try {
        for (let i = 0; i < capitalized.length; i += 1) {
            if (capitalized[i] === ' ') {
                capitalized[i + 1] = capitalized[i + 1].toUpperCase()
            }
        }
    }
    catch (err) {
        console.log(err)
        // return (phrase)
    }
    return capitalized.join('')
}
;// CONCATENATED MODULE: ./src/modal.js

function getModal(weather, conversion, unit) {
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
;// CONCATENATED MODULE: ./src/form.js
function getLocationForm() {
    const formContainer = document.createElement('div')
    formContainer.setAttribute('id', 'form-container')
    const form = document.createElement('form')
    
    let cityLabel = document.createElement('label')
    cityLabel.setAttribute('for', 'city')
    cityLabel.textContent = 'City:'
    form.appendChild(cityLabel)
    let cityInput = document.createElement('input')
    cityInput.setAttribute('type', 'text')
    cityInput.setAttribute('id', 'city')
    cityInput.setAttribute('name', 'city')
    form.appendChild(cityInput)

    let stateLabel= document.createElement('label')
    stateLabel.setAttribute('for', 'state')
    stateLabel.textContent = 'State:'
    form.appendChild(stateLabel)
    let stateInput = document.createElement('input')
    stateInput.setAttribute('type', 'text')
    stateInput.setAttribute('id', 'state')
    stateInput.setAttribute('name', 'state')
    form.appendChild(stateInput)

    let countryLabel= document.createElement('label')
    countryLabel.setAttribute('for', 'country')
    countryLabel.textContent = 'Country:'
    form.appendChild(countryLabel)
    let countryInput = document.createElement('input')
    countryInput.setAttribute('type', 'text')
    countryInput.setAttribute('id', 'country')
    countryInput.setAttribute('name', 'country')
    form.appendChild(countryInput)

    let submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'button')
    submitButton.setAttribute('id', 'form-submit') 
    submitButton.textContent = 'Go!'
    form.appendChild(submitButton)

    formContainer.appendChild(form)
    return formContainer
}
;// CONCATENATED MODULE: ./src/secrets.js
const apiKey = "09d94b3ecf354f2c118344d82e6361ba"

;// CONCATENATED MODULE: ./src/api.js


async function getWeatherData(request) {
    let response = await fetch(request, { mode: 'cors' })
    let query = await response.json()
    let weatherData = {}
    weatherData = query.main
    weatherData['type'] = query.weather[0].main
    weatherData['desc'] = query.weather[0].description
    return weatherData
}

function makeRequest(endpoint, ...values) {
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
            if (reqStr === '') {
                return reqStr += value
            } else if (value === '') {
                return reqStr
            }
            else {
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

;// CONCATENATED MODULE: ./src/gui.js





function renderPage(location) {
    const main = document.querySelector('main')
    renderLocationForm(main)
}

function renderWeatherModal(weather, unit = 'F' ) {
    let currentModal = document.getElementById('weather-modal')
    let location
    if (currentModal) {
        _removeChildren(currentModal)
        location = currentModal
    } else {
        location = document.querySelector('main')
    }
    console.log(weather)
    const conversion = getUnitFunction(unit)   
    const modal = getModal(weather, conversion, unit)
    location.appendChild(modal)
    let toggle = modal.querySelector('button')
    toggle.addEventListener('click', () => {
        let u = (unit === 'F' ? 'C': 'F')
        renderWeatherModal(weather, u)
    })
}

function renderLocationForm(location) {    
    const form = getLocationForm()
    location.appendChild(form)
    const submit = document.getElementById('form-submit')
    submit.addEventListener('click', submitClickHandler)
}

function submitClickHandler(e) {
    const form = e.currentTarget.parentNode
    // get information for request
    const endpoint = 'city'
    const city = form.city.value
    const state = form.state.value
    const country = form.country.value
    if (city === '') {
        alert('You need a city name.')
    } else if (state != '' && country === '') {
        alert('You need a country code.')
    } else {
        const request = makeRequest(endpoint, city, state, country)
        getWeatherData(request)
        .then((weather) => {
            renderWeatherModal(weather, 'F')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

function _removeChildren(location) {
    while(location.firstChild) {
        location.removeChild(location.lastChild)
    }
}


;// CONCATENATED MODULE: ./src/index.js


const root = document.querySelector('main')
renderPage(root)
/******/ })()
;