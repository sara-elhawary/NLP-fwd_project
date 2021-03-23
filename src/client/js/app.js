// console.log('working')

import { isValidURL } from './utils/input-is-valid'

export const start = (alertService, componentService) => {
  console.log('loaded')
  componentService.onClick(() => {
    alertService.clearError()
    const input = componentService.getInput()
    // console.log('click is on   watch for change')

    if (isValidURL(input)) {
      fetch('http://localhost:8081/analyze-article', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({ clientURL: input }),
      })
        .then((response) => {
          console.log('first then is working')
          return response.json()
        })
        .then((response) => {
          console.log(response)
          fetch('http://localhost:8081/update-data')
            .then((response) => response.json())
            .then((response) => {
              console.log('fetch is working')

              console.log(response)

              componentService.getResult(response)
              alertService.clearError()
              componentService.updateUI()
            })
        })
    } else {
      alertService.displayError()
      alertService.clearError()
    }
  })
}
