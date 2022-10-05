// Example for get of API in RapidAPI

function display(data){
    const displayDiv = document.getElementById('1div');
    
    const dataJson = JSON.stringify(data['data'], null, 2)
    displayDiv.textContent = dataJson

    // const confirmed = data['data'].confirmed;
    // console.log(confirmed)
    // const deaths = data['data'].deaths;
    // const place = document.createElement('p');
    // place.innerHTML = confirmed + '-' + deaths;
    // displayDiv.appendChild(place);
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3b981c4cc6msh1c4adcfde33542bp1e8a16jsn36e6a1393e29',
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
    }
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        display(data);
    })
    .catch(err => console.error(err));