// declare variables and constants

// @ts-ignore
const clientURL = document.getElementById('client-url').value
const formBtn = document.getElementById('form-btn')
const resultDiv = document.getElementById('result_div')
const resultList = document.getElementById('result')

//checking client input
function isURL(string) {}

function clearError() {
  resultDiv.innerHTML = ''
}
function displayError() {
  resultDiv.innerHTML = '<h3>ERROR</h3><p>Please Enter valid URL</p>'
  setTimeout(clearError, 3000)
}

// 1-get url from client
formBtn.addEventListener(
  'click',
  (e) => {
    //check if input is url
    if (isURL(clientURL)) {
      fetch('/')
    } else {
      // display error message
      displayError()
    }
  }
  // 2-go to route 'analyze-article" when client hit submit
  // 3-dynamically create a list to show the response we get back from server
)
