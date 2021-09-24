const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    const usdCountries = countries.filter((country)=>{
        if(country?.currencies?.USD?.name === 'United States dollar'){
            return country
        }
    })
    console.log(usdCountries.map((item)=>{
        return item.name.official
    }))
}
xhr.send()