export function kelvinToC(k) {
    return (k - 273.15).toFixed(2)
}

export function kelvinToF(k) {
    let c = kelvinToC(k)
    return celciusToF(c).toFixed(2)
}

export function celciusToF(c) {
    return ((c * (9.0/5.0)) + 32)
}

export function fahrenheitToC(f) {
    return ((f - 32) / (9.0/5.0))
}