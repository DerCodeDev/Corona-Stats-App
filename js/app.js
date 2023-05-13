
const URL = 'https://api.corona-zahlen.org/germany'

fetch(URL)
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(data => {

        let cases = parseInt(data.cases).toLocaleString()
        let deaths = parseInt(data.deaths).toLocaleString()
        let recovered = parseInt(data.recovered).toLocaleString()



        let casesPerWeek = parseInt(data.casesPerWeek).toLocaleString()
        let deathsPerWeek = parseInt(data.deathsPerWeek).toLocaleString()
        let weekIncidence = parseInt(data.weekIncidence).toLocaleString()
        let lastUpdate = new Date(data.meta.lastCheckedForUpdate).toLocaleString()



        document.getElementById("info").innerHTML = '<h2>Insgesamt</h2>'
        document.getElementById("info").innerHTML += `<h1>Fälle: ${cases}</h1>`
        document.getElementById("info").innerHTML += `<h1>Tode: ${deaths}</h1>`
        document.getElementById("info").innerHTML += `<h1>Genesen: ${recovered}</h1>`
        
        document.getElementById("info").innerHTML += '<h1>______________________</h1>'
        document.getElementById("info").innerHTML += '<h2>Pro Woche</h2>'
        document.getElementById("info").innerHTML += `<h1>Fälle: ${casesPerWeek}</h1>`
        document.getElementById("info").innerHTML += `<h1>Tode: ${deathsPerWeek}</h1>`
        document.getElementById("info").innerHTML += `<h1>Inzidenz: ${weekIncidence}</h1>`
        document.getElementById("info").innerHTML += `<h4>Letzte Aktualisierung am: ${lastUpdate} </h4>`


    })
