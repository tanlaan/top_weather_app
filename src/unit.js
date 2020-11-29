import { kelvinToC, kelvinToF } from './temperature'

export function getUnitFunction(unit) {
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