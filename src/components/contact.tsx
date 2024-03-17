import React from 'react'

import { Box, Heading, HStack, Text, Tooltip, VStack } from '@chakra-ui/react'
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
      <Heading fontSize="6rem">Contact</Heading>
        <Tooltip label="Email">
          <Text fontSize="1.2rem">phpaes99@gmail.com</Text>
        </Tooltip>
        <HStack gap="1rem">
          <SocialMediaIcons />
        </HStack>
      </VStack>
    </Box>
  )
}

export default Contact
