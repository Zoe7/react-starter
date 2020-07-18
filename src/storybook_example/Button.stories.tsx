import { action } from '@storybook/addon-actions'
import React from 'react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const HelloButton = () => {
  return <Button onClick={action('clicked')}>Hello Button</Button>
}
