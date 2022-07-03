import React from 'react'

import { Box, Icon, Tooltip } from '@chakra-ui/react'
import AppLink from './app-link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function SocialMediaIcons() {
  return (
    <>
      <Tooltip label="GitHub">
        <Box>
          <AppLink href="https://github.com/paulo-paes">
            <Icon as={BsGithub} boxSize="2.5rem" />
          </AppLink>
        </Box>
      </Tooltip>
      <Tooltip label="LinkedIn">
        <Box>
          <AppLink href="https://www.linkedin.com/in/paulo-paes7/">
            <Icon as={BsLinkedin} boxSize="2.5rem" />
          </AppLink>
        </Box>
      </Tooltip>
    </>
  )
}

export default SocialMediaIcons
