import React from 'react'
import NextLink from 'next/link'

import { Link, useColorModeValue } from '@chakra-ui/react'

type NavLinkProps = {
  href: string
  label: string
  children?: React.ReactNode
}

function NavLink(props: NavLinkProps) {
  const colorValue = useColorModeValue(
    'brand.light.secondary',
    'brand.dark.secondary'
  )

  return (
    <NextLink href={props.href} passHref>
      <Link
        position="relative"
        textAlign="center"
        fontSize="1.5rem"
        _hover={{
          _after: {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '0.125rem',
            background: colorValue,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
          },
        }}
      >
        {props.label}
      </Link>
    </NextLink>
  )
}

export default NavLink
