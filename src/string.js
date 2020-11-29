export function capitalCase(phrase) {
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