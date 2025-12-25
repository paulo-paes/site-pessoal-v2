import React from 'react'

import { Box, Icon, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'

import {
  DiAngularSimple,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from 'react-icons/di'
import {
  SiSpring,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiTypescript,
  SiApachekafka,
  SiJunit5,
  SiNodedotjs,
} from 'react-icons/si'

function Techs() {
  return (
    <Box>
      <SimpleGrid
        minChildWidth={{ base: '2.5rem', md: '3rem', xl: '5rem' }}
        gap={{ base: '1.5rem', md: '2rem', xl: '3rem' }}
      >
        <Tooltip label="Java">
          <Box w="100%">
            <Icon as={DiJava} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Spring / Spring Boot">
          <Box w="100%">
            <Icon as={SiSpring} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="JUnit">
          <Box w="100%">
            <Icon as={SiJunit5} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Google Cloud">
          <Box w="100%">
            <Icon as={SiGooglecloud} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="TypeScript">
          <Box w="100%">
            <Icon as={SiTypescript} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="JavaScript">
          <Box w="100%">
            <Icon as={DiJavascript1} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Node.js">
          <Box w="100%">
            <Icon as={SiNodedotjs} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Angular">
          <Box w="100%">
            <Icon as={DiAngularSimple} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="PostgreSQL">
          <Box w="100%">
            <Icon as={DiPostgresql} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="MongoDB">
          <Box w="100%">
            <Icon as={DiMongodb} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="MySQL">
          <Box w="100%">
            <Icon as={DiMysql} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Apache Kafka">
          <Box w="100%">
            <Icon as={SiApachekafka} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Docker">
          <Box w="100%">
            <Icon as={SiDocker} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Git">
          <Box w="100%">
            <Icon as={SiGit} boxSize="100%" />
          </Box>
        </Tooltip>
      </SimpleGrid>
    </Box>
  )
}

export default Techs
