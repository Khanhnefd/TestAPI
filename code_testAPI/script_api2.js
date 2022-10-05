// fetch data from FastAPI


// display data in HTML
function display(data, divID) {
    const displayDiv = document.getElementById(divID);
    const dataJson = JSON.stringify(data, null, 2)
    displayDiv.textContent = dataJson
}

// fetchAPI by data in submitted form HTML
function fetchAPI(formClass) {
    const formEL = document.querySelector(formClass);
    formEL.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(formEL);

        // form data
        const dataInput = Object.fromEntries(formData);
        const dataPredict = {
            'sentences': [
                dataInput
            ]
        }
        console.log('predict \n', JSON.stringify(dataPredict));
        console.log('input\n', dataInput)

        // options in fetch API
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataPredict)
        };

        // fetch API
        fetch('http://localhost:8000/ex2/api/flair_ner/predict', options)
            .then(res => res.json())
            .then(data => {
                console.log('Success: \n', data);
                display(data, 'result');
            })
            .catch(err => console.error(err));
    });
}

// coding
fetchAPI('.form');



