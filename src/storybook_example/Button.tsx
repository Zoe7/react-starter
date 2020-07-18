import { Button as ChakraButton } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <ChakraButton variantColor="green" onClick={onClick}>
      {children}
    </ChakraButton>
  )
}
