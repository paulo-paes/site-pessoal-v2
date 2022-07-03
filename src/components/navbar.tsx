import React from 'react'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import NavLink from './nav-link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  return (
    <Flex
      width="100%"
      justifyContent="space-around"
      paddingBlock="1.2rem"
      position="fixed"
      bg={bgColor}
      top="0"
      zIndex="2"
    >
      <Box>
        <Text fontSize="2.5rem">{'<paulo-paes>'}</Text>
      </Box>
      <Box>
        <HStack gap="2rem" width="100%" height="100%">
          <NavLink href="#skills" label="Skills" />
          {/* <NavLink href="#projetos" label="Projetos" /> */}
          {/* <NavLink href="#formacao" label="Formação" /> */}
          <NavLink href="#contato" label="Contato" />
          <IconButton
            variant="ghost"
            aria-label="change-theme"
            icon={
              colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />
            }
            onClick={toggleColorMode}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default Navbar
