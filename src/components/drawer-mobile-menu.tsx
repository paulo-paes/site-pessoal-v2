import React from 'react'

import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

import NavLink from './nav-link'

type DrawerMobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const DrawerMobileMenu = ({ isOpen, onClose }: DrawerMobileMenuProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      size="xs"
      isFullHeight
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <VStack gap="2rem">
            <NavLink href="#skills" label="Skills" />
            <Divider />
            {/* <NavLink href="#projetos" label="Projetos" /> */}
            {/* <NavLink href="#formacao" label="Formação" /> */}
            <NavLink href="#contato" label="Contato" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMobileMenu
