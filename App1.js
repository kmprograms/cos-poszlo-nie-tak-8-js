/*
    Przygotuj statystykę, z której dowiesz się, ile w napisie składającym się z wielu
    wierszy, znajduje się wyrazów zaczynających się wielką literą, ile wyrazów zaczyna
    się małą literą, a ile wyrazów posiada tylko i wyłącznie cyfry.
*/

var line1 = 'To jest pierwsza linia - 1';
var line2 = 'To jest druga linia - 2';

var line1Tablica = line1.split(' ')
var line2Tablica = line2.split(' ')

console.log(line1Tablica)
console.log(line2Tablica)

var counterDuzaLitera = 0
var counterMalaLitera = 0
var counterLiczba = 0

for (let i = 0; i < line1Tablica.length; i++) {
    if (line1Tablica[i][0] >= 'A' && line1Tablica[i][0] <= 'Z') {
        counterDuzaLitera++;
    } else if (line1Tablica[i][0] >= 'a' && line1Tablica[i][0] <= 'z') {
        counterMalaLitera++;
    } else if (line1Tablica[i][0] >= '0' && line1Tablica[i][0] <= '9') {
        counterLiczba++;
    }
}

for (let i = 0; i < line2Tablica.length; i++) {
    if (line2Tablica[i][0] >= 'A' && line2Tablica[i][0] <= 'Z') {
        counterDuzaLitera++;
    } else if (line2Tablica[i][0] >= 'a' && line2Tablica[i][0] <= 'z') {
        counterMalaLitera++;
    } else if (line2Tablica[i][0] >= '0' && line2Tablica[i][0] <= '9') {
        counterLiczba++;
    }
}

console.log('DUZA = ' + counterDuzaLitera)
console.log('MALA = ' + counterMalaLitera)
console.log('LICZBA = ' + counterLiczba)
