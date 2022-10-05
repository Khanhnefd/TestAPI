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
    // check empty checkbox
    var alertDiv = document.getElementById('alert');
    alertDiv.innerHTML = ''
    alertDiv.style.display = 'none';
    if (!dataInput['roles']) {
      alertDiv.innerHTML = 'Please choose at least one Roles';
      alertDiv.style.display = 'block';
      return;
    }
    else {
      // get data of checkbox
      dataInput['roles'] = []
      var checkbox = document.getElementsByName('roles');
      for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked)
          dataInput['roles'].push(checkbox[i].value);
      }
    }
    console.log(dataInput);
    console.log(dataInput['roles'])

    // options in fetch API
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataInput)
    };

    // fetch API
    fetch('http://localhost:8000/api/v1/user', options)
      .then(res => res.json())
      .then(data => {
        console.log('Success: \n', data);
        display(data, '1div');
      })
      .catch(err => console.error(err));
  });
}

// coding
fetchAPI('.form');

// const data_input = {
//   "first_name": "html",
//   "last_name": "page",
//   "middle_name": "string",
//   "gender": "male",
//   "roles": [
//     "admin", 'student'
//   ]
// }



