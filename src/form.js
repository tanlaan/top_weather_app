export function getLocationForm() {
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