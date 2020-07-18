/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link as ChakraLink } from '@chakra-ui/core'
import * as React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

export const Link = (props: RouterLinkProps) => {
  return (
    // @ts-ignore This is a known issue with Chakra https://github.com/chakra-ui/chakra-ui/issues/1009
    <ChakraLink {...props} as={RouterLink} />
  )
}
