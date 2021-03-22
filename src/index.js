// alert('hey there')
import { start } from './client/js/app'
import { AlertService } from './client/js/services/alert.service'
import { ComponentService } from './client/js/services/component.service'

import './client/styles/card.scss'
import './client/styles/footer.scss'
import './client/styles/form.scss'
import './client/styles/intro.scss'
import './client/styles/result.scss'
import './client/styles/error-display.scss'
import './client/styles/base.scss'

const alertService = new AlertService()
const componentService = new ComponentService()

document.addEventListener('DOMContentLoaded', () => {
  start(alertService, componentService)
})
