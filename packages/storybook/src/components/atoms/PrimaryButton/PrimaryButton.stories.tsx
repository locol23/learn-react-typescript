import React from 'react'
import { storiesOf } from '@storybook/react'
import { PrimaryButton } from '.'

const stories = storiesOf('Button', module)

stories.add('PrimaryButton', () => (
  <PrimaryButton onClick={() => alert('primary button')}>Primary Button</PrimaryButton>
))

