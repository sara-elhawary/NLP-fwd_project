export class ComponentService {
  constructor() {
    this.clientURL = document.getElementById('client-url')
    this.formBtn = document.getElementById('form-btn')
    this.resultDiv = document.getElementById('result_div')
    this.resultList = document.getElementById('result')
  }
  getResult(response) {
    console.log('get result is working')

    document.getElementById(
      'agreement'
    ).innerHTML = `Agreement: ${response.agreement}`

    document.getElementById(
      'subjectivity'
    ).innerHTML = `Subjectivity: ${response.subjectivity}`

    document.getElementById(
      'confidence'
    ).innerHTML = `Confidence: ${response.confidence}`

    document.getElementById('irony').innerHTML = `Irony: ${response.irony}`
  }
  updateUI() {
    console.log('update is working')
    this.resultDiv.classList.remove('hidden')
  }
  resetUI() {
    setTimeout(() => {
      this.resultDiv.classList.add('hidden')
      // @ts-ignore
      this.clientURL.value = ''
    }, 8000)
  }
  getInput() {
    // @ts-ignore
    return this.clientURL.value
  }
  onClick(startAnalyzing) {
    console.log('onclick method')

    this.formBtn.addEventListener('click', startAnalyzing)
  }
}
