import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from './themeDecorator'
import React from 'react'

addDecorator(storyFn => <ThemeDecorator>{storyFn()}</ThemeDecorator>);