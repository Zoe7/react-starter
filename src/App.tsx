import { Flex, Text } from '@chakra-ui/core'
import React, { ReactNode } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Link } from './components/Link'

type MenuItemProps = {
  children: ReactNode
  to: string
}

const MenuItems = ({ children, to }: MenuItemProps) => {
  return (
    <Text fontSize="xl" mx={2} display="block">
      <Link to={to}> {children}</Link>
    </Text>
  )
}

function App() {
  return (
    <>
      <Router>
        <Flex as="nav" bg="teal.500" padding="1.5rem" color="white">
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About</MenuItems>
        </Flex>
        <Switch>
          <Route path="/about">
            <Text m={4} fontSize="xl">
              This is a cool little starter projects!
            </Text>
          </Route>
          <Route path="/">
            <Text m={4} fontSize="xl">
              Hello World!
            </Text>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
