import React from 'react'
import { storiesOf } from '@storybook/react'
import { SecondaryButton } from '.'

const stories = storiesOf('Button', module)

stories.add('SecondaryButton', () => (
  <SecondaryButton onClick={() => alert('secondary button')}>Secondary Button</SecondaryButton>
))

