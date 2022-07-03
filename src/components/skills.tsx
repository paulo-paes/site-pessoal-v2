import React from 'react'

import {
  Box,
  Heading,
  HStack,
  Progress,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import Techs from './techs'

function Skills() {
  const bgColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const textColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  const progressBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')
  return (
    <Box
      id="skills"
      width="100%"
      marginTop="5rem"
      bg={bgColor}
      minHeight="30rem"
    >
      <Box width="70%" marginInline="auto" paddingBlock="5rem">
        <Heading fontSize="6rem" color={textColor}>
          Skills
        </Heading>
        <HStack
          width="100%"
          paddingTop="2rem"
          alignItems="flex-start"
          gap="3rem"
        >
          <Box color={textColor} maxWidth="50%" width="50%">
            <Techs />
          </Box>
          <Box color={textColor} flexGrow="1">
            <Text>Backend</Text>
            <Progress colorScheme="blue" size="sm" value={40} bg={progressBg} />

            <Text marginTop="2rem">Frontend</Text>
            <Progress colorScheme="blue" size="sm" value={60} bg={progressBg} />

            <Text marginTop="2rem">React</Text>
            <Progress colorScheme="blue" size="sm" value={80} bg={progressBg} />

            <Text marginTop="2rem">Angular</Text>
            <Progress colorScheme="blue" size="sm" value={80} bg={progressBg} />
          </Box>
        </HStack>
      </Box>
    </Box>
  )
}

export default Skills
