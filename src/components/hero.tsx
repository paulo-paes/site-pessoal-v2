import React from 'react'

import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'

import SocialMediaIcons from './social-media-icons'

function Hero() {
  return (
    <Box
      id="hero"
      width={{ base: '80%', md: '70%' }}
      marginInline="auto"
      marginTop="5rem"
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <VStack alignItems="flex-start">
          <Text fontSize={{ base: '1.5rem', md: '2.25rem' }}>
            Olá, eu sou o
          </Text>
          <Heading
            fontSize={{ base: '3.5rem', md: '4rem', lg: '6rem', '2xl': '9rem' }}
          >
            Paulo Paes
          </Heading>
          <Text fontSize={{ base: '1.5rem', md: '2.25rem' }}>
            Desenvolvedor Fullstack
          </Text>
          <Text
            noOfLines={{ base: 5, md: 2 }}
            maxWidth={{ base: '100%', md: '500px' }}
          >
            Atuo profissionalmente como desenvolvedor há um ano e sou estudante
            de Análise e Desenvolvimento de Sistemas no IFSP.
          </Text>
        </VStack>
        <HStack
          paddingLeft={{ base: 'inherit', md: '3rem' }}
          marginTop={{ base: '2rem', md: 'inherit' }}
          gap="2rem"
          justifyContent={{ base: 'center', md: 'inherit' }}
        >
          <SocialMediaIcons />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Hero
