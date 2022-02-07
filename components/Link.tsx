import * as React from 'react';
import { default as NextLink } from 'next/link';
import styled from 'styled-components';

type LinkProps = {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
};

const Link = ({ href, isExternal = false, children }: LinkProps) => {
  return isExternal ? (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  ) : (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;

const StyledLink = styled.a``;
