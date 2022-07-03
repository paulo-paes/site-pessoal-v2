import React from 'react'

import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

type AppLinkProps = {
  href: string
  children?: React.ReactNode
}

function AppLink(props: AppLinkProps) {
  return (
    <NextLink href={props.href} passHref>
      <Link
        position="relative"
        textAlign="center"
        fontSize="1.5rem"
        target="_blank"
      >
        {props.children}
      </Link>
    </NextLink>
  )
}

export default AppLink
