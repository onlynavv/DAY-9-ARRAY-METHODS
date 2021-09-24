const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    countries.forEach(item => {
        const capital = item.capital
        console.log(capital ? capital[0] : 'not available', item.name.official, item.flag)
    });
}
xhr.send()