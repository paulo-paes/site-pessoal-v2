import React from 'react'

import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  const bgColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const textColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  return (
    <Flex
      bg={bgColor}
      alignContent="center"
      justifyContent="center"
      width="100%"
      paddingBlock="2rem"
    >
      <Text fontSize="1.5rem" color={textColor}>
        © 2022 - Paulo Paes
      </Text>
    </Flex>
  )
}

export default Footer
