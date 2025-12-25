import React from 'react'

import {
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

import Techs from './techs'

function Skills() {
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const iconColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Box
      id="skills"
      width="100%"
      paddingBlock="4rem"
    >
      <Box width="70%" marginInline="auto">
        <Heading
          fontSize={{ base: '2.5rem', md: '4rem' }}
          textAlign="center"
          color={headingColor}
          marginBottom="3rem"
        >
          Skills
        </Heading>
        <Box
          color={iconColor}
          width={{ base: '100%', '2xl': '75%' }}
          margin="auto"
        >
          <Techs />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
