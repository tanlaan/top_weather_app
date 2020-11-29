import { getUnitFunction } from './unit'
import { getModal } from './modal'
import { getLocationForm } from './form'
import { makeRequest, getWeatherData } from "./api"

export function renderPage(location) {
    const main = document.querySelector('main')
    renderLocationForm(main)
}

export function renderWeatherModal(weather, unit = 'f' ) {
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
    const modal = getModal(weather, conversion)
    location.appendChild(modal)
}

export function renderLocationForm(location) {    
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
            renderWeatherModal(weather, 'f')
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

