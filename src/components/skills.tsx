import React from 'react'

import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import Techs from './techs'

function Skills() {
  const bgColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const textColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  return (
    <Box
      id="skills"
      width="100%"
      marginTop="5rem"
      bg={bgColor}
      minHeight="30rem"
    >
      <Box width="70%" marginInline="auto" paddingBlock="5rem">
        <Heading
          fontSize="6rem"
          textAlign="center"
          color={textColor}
          margin="auto">
          Skills
        </Heading>
        <Flex
          direction={{ base: 'column-reverse', '2xl': 'row' }}
          width="100%"
          paddingTop="2rem"
          alignItems="flex-start"
          gap="3rem"
        >
          <Box
            color={textColor}
            width={{ base: '100%', '2xl': '75%' }}
            margin="auto"
          >
            <Techs />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Skills
