const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    const smallCountries = countries.filter((item)=>{
        return item.area < 25000
    })
    const displayCountries = smallCountries.map((item)=>{
        return item.name.official
    })
    console.log(displayCountries)
}
xhr.send()