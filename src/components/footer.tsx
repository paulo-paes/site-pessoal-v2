import React from 'react'

import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      width="100%"
      paddingBlock="2rem"
      borderTop="1px solid"
      borderColor={borderColor}
      marginTop="2rem"
    >
      <Text fontSize="1rem" opacity={0.7}>
        © { new Date().getFullYear() } - Paulo Paes
      </Text>
    </Flex>
  )
}

export default Footer
