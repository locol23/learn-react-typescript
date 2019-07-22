import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '.'

const stories = storiesOf('Button', module)

stories.add('default', () => <Button onClick={() => alert('button')}>Button</Button>)

