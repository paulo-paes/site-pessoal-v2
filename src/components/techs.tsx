import React from 'react'

import { Box, Icon, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'

import {
  DiAngularSimple,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiReact,
} from 'react-icons/di'
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si'

function Techs() {
  return (
    <Box>
      <SimpleGrid minChildWidth="5rem" gap="3rem">
        <Tooltip label="HTML">
          <Box w="100%">
            <Icon as={DiHtml5} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="CSS">
          <Box w="100%">
            <Icon as={DiCss3Full} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="JavaScript">
          <Box w="100%">
            <Icon as={DiJavascript1} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Angular">
          <Box w="100%">
            <Icon as={DiAngularSimple} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="ReactJS">
          <Box w="100%">
            <Icon as={DiReact} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Chakra-UI">
          <Box w="100%">
            <Icon as={SiChakraui} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="NextJS">
          <Box w="100%">
            <Icon as={SiNextdotjs} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="TypeScript">
          <Box w="100%">
            <Icon as={SiTypescript} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="NodeJS">
          <Box w="100%">
            <Icon as={SiNodedotjs} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="ExpressJS">
          <Box w="100%">
            <Icon as={SiExpress} boxSize="100%" />
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
        <Tooltip label="PostgreSQL">
          <Box w="100%">
            <Icon as={SiPostgresql} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Git">
          <Box w="100%">
            <Icon as={SiGit} boxSize="100%" />
          </Box>
        </Tooltip>
        <Tooltip label="Docker">
          <Box w="100%">
            <Icon as={SiDocker} boxSize="100%" />
          </Box>
        </Tooltip>
      </SimpleGrid>
    </Box>
  )
}

export default Techs
