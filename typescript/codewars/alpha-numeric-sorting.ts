class AlphaNumericSorting {
    order(words: string) {
        return words.split(' ')
            .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
            .join(' ')
    }
}

let alphaNumericSorting = new AlphaNumericSorting();
console.log(alphaNumericSorting.order('is21 Thi1s T4est 3a'));