import React from 'react'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import NavLink from './nav-link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import DrawerMobileMenu from './drawer-mobile-menu'

function Navbar() {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('whiteAlpha.900', 'gray.800')

  const handleOpenMenu = () => {
    onOpen()
  }

  return (
    <>
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
          <Text fontSize={{ base: '1.6rem', md: '2.5rem' }}>
            {'<paulo-paes>'}
          </Text>
        </Box>
        <Box>
          <HStack gap="2rem" width="100%" height="100%">
            <HStack display={{ base: 'none', md: 'flex' }} gap="2rem">
              <NavLink href="#skills" label="Skills" />
              {/* <NavLink href="#projetos" label="Projetos" /> */}
              {/* <NavLink href="#formacao" label="Formação" /> */}
              <NavLink href="#contato" label="Contato" />
            </HStack>
            <IconButton
              variant="ghost"
              aria-label="change-theme"
              icon={
                colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />
              }
              onClick={toggleColorMode}
            />
            <IconButton
              aria-label="menu"
              icon={<BiMenu />}
              display={{ base: 'inherit', md: 'none' }}
              onClick={handleOpenMenu}
            />
          </HStack>
        </Box>
      </Flex>
      <DrawerMobileMenu isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Navbar
