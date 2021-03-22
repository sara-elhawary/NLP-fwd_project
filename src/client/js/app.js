console.log('working')
// declare variables and constants

// @ts-ignore
const clientURL = document.getElementById('client-url')
const formBtn = document.getElementById('form-btn')
const resultDiv = document.getElementById('result_div')
const resultList = document.getElementById('result')

//checking client input
// @ts-ignore
function isValidURL(str) {
  const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  if (regexp.test(str)) {
    console.log('isvalid true is working')

    return true
  } else {
    console.log('is valid false is working')

    return false
  }
}

function clearError() {
  console.log('clean error is working')

  resultDiv.classList.add('hidden')
}
function displayError() {
  console.log('display error is working')

  resultDiv.innerHTML = '<h3>ERROR</h3><p>Please Enter valid URL</p>'
  setTimeout(clearError, 3000)
}
function getResult(response) {
  console.log('get result is working')

  document.getElementById(
    'agreement'
  ).innerHTML = `Agreement:${response.agreement}`

  document.getElementById(
    'subjectivity'
  ).innerHTML = `Subjectivity:${response.subjectivity}`

  document.getElementById(
    'confidence'
  ).innerHTML = `Confidence:${response.confidence}`

  document.getElementById('irony').innerHTML = `irony:${response.irony}`
}

function updateUI() {
  console.log('update is working')
  resultDiv.classList.remove('hidden')
}

// 1-get url from client
formBtn.addEventListener('click', () => {
  // get input
  console.log('click btn is working')

  //check if input is url
  // @ts-ignore
  if (isValidURL(clientURL.value)) {
    // @ts-ignore
    const body = { clientURL: clientURL.value }

    // 2-go to route 'analyze-article" when client hit submit

    fetch('/analyze-article', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('first then is working')
        return response.json()
      })
      .then((response) => {
        console.log(response)
        fetch('/update-data')
          .then((response) => response.json())
          .then((response) => {
            console.log('fetch is working')

            console.log(response)
            // 3-dynamically create a list to show the response we get back from server

            getResult(response)
            // @ts-ignore
            updateUI()
          })
      })
  } else {
    // display error message
    displayError()
  }
})
