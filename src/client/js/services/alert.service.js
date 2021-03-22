export class AlertService {
  constructor() {
    this.errorDisplay = document.getElementById('error-display')
  }
  displayError() {
    console.log('display error is working')

    this.errorDisplay.innerHTML = '<h3>ERROR</h3><p>Please Enter valid URL</p>'
    // setTimeout(clearError, 3000)
  }
  clearError() {
    console.log('clean error is working')

    this.errorDisplay.classList.add('hidden')
  }
}
