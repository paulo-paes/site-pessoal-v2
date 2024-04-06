import React from 'react'

import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import SocialMediaIcons from './social-media-icons'

function Contact() {
  return (
    <Box
      id="contato"
      width="70%"
      marginInline="auto"
      marginBlock="3rem"
    >
      <VStack gap="2rem" marginTop="2rem">
        <Heading fontSize={{ base: "3rem", md: "6rem" }}>Contact</Heading>
        <HStack gap="1rem">
          <SocialMediaIcons />
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact
