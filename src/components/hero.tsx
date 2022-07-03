import React from 'react'

import {
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import AppLink from './app-link'
import SocialMediaIcons from './social-media-icons'

function Hero() {
  return (
    <Box id="hero" width="70%" marginInline="auto" marginTop="5rem">
      <HStack>
        <VStack alignItems="flex-start">
          <Text fontSize="2.25rem">Olá, eu sou o</Text>
          <Heading fontSize="9rem">Paulo Paes</Heading>
          <Text fontSize="2.25rem">Desenvolvedor Fullstack</Text>
          <Text>
            Lorem ipsum dolor sit amet. Ut consectetur voluptatem vel molestiae
            error et nulla itaque sed internos esse ea voluptas.
          </Text>
        </VStack>
        <HStack paddingLeft="3rem" gap="2rem">
          <SocialMediaIcons />
        </HStack>
      </HStack>
    </Box>
  )
}

export default Hero
