const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    const asiaCountries = countries.filter((item)=>{
        return item.region == 'Asia'
    })
    const asianCountName = asiaCountries.map((item)=>{
        return item.name.official
    })
    console.log(asianCountName)
}
xhr.send()