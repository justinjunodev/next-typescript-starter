import * as React from 'react'
import { default as NextLink } from 'next/link'

interface LinkProps {
  href: string
  isExternal?: boolean
  children: React.ReactNode
}

export const Link = ({ href, isExternal = false, children }: LinkProps) => {
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a>{children}</a>
    </NextLink>
  )
}
