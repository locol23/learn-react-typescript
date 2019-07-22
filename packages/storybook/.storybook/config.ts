import { configure } from '@storybook/react'
import 'ress'

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)

