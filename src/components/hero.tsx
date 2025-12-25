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
            Hi, I&apos;m
          </Text>
          <Heading
            fontSize={{ base: '3.5rem', md: '4rem', lg: '6rem', '2xl': '9rem' }}
          >
            Paulo Paes
          </Heading>
          <Text fontSize={{ base: '1.5rem', md: '2.25rem' }}>
            Java Software Engineer
          </Text>
          <Text
            noOfLines={{ base: 7, md: 4 }}
            maxWidth={{ base: '100%', md: '650px' }}
            lineHeight="1.8"
          >
            4+ years of experience building scalable backend systems with Java, Spring Boot, and cloud technologies. Bachelor&apos;s degree in Systems Analysis and Development.
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
