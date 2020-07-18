import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import React from 'react'

export default {
  title: 'Button',
  component: Button,
}

export const HelloButton = () => {
  return <Button onClick={action('clicked')}>Hello Button</Button>
}
