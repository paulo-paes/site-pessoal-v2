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

import AppLink from './app-link'
import { BsFillSunFill, BsFillMoonFill, BsGithub, BsLinkedin } from 'react-icons/bs'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      paddingBlock="1.2rem"
      paddingInline={{ base: '1.5rem', md: '3rem' }}
      position="fixed"
      bg={bgColor}
      top="0"
      zIndex="2"
    >
      <Box>
        <Text fontSize={{ base: '1.4rem', md: '2rem' }}>
          {'<paulo-paes>'}
        </Text>
      </Box>
      <HStack gap={{ base: '0.5rem', md: '1rem' }}>
        <AppLink href="https://github.com/paulo-paes">
          <IconButton
            variant="ghost"
            aria-label="GitHub"
            icon={<BsGithub />}
          />
        </AppLink>
        <AppLink href="https://www.linkedin.com/in/paulo-paes7/">
          <IconButton
            variant="ghost"
            aria-label="LinkedIn"
            icon={<BsLinkedin />}
          />
        </AppLink>
        <IconButton
          variant="ghost"
          aria-label="change-theme"
          icon={
            colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />
          }
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  )
}

export default Navbar
