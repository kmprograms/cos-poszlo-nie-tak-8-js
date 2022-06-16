/*
    Przygotuj statystykę, z której dowiesz się, ile w napisie składającym się z wielu
    wierszy, znajduje się wyrazów zaczynających się wielką literą, ile wyrazów zaczyna
    się małą literą, a ile wyrazów posiada tylko i wyłącznie cyfry.
*/

const countUpperLowerNumbers = (text) => text
    .split(/\s+/)
    .reduce((res, word, index) => {
        if (word.match(/^[A-Z].*/)) {
            return {... res, ['upper']: res['upper'] + 1}
        }
        if (word.match(/^[a-z].*/)) {
            return {... res, ['lower']: res['lower'] + 1}
        }
        if (word.match(/^\d+$/)) {
            return {... res, ['number']: res['number'] + 1}
        }
        return res
    }, {upper: 0, lower: 0, number: 0})

const main = () => {
    const lines = `To jest pierwsza linia - 1
To jest druga linia - 2`
    console.log(lines)
    console.log(countUpperLowerNumbers(lines))
}

main();
