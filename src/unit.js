import { kelvinToC, kelvinToF } from './temperature'

export function getUnitFunction(unit) {
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