export class AlertService {
  constructor() {
    this.errorDisplay = document.getElementById('error-display')
    this.clientURL = document.getElementById('client-url')
  }
  displayError() {
    console.log('display error is working')
    this.errorDisplay.classList.remove('hidden')
  }
  clearError() {
    console.log('clean error is working')
    setTimeout(() => {
      this.errorDisplay.classList.add('hidden')
      // @ts-ignore
      this.clientURL.value = ''
    }, 3000)
    console.log('after')
  }
}
