const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    const totalArea = countries.reduce((acc,curr)=>{
        return acc+=curr.area
    },0)
    console.log(totalArea.toFixed(2))
}
xhr.send()