import * as React from 'react';
import { default as NextLink } from 'next/link';
import * as S from './styled';

interface LinkProps {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Link = ({ href, isExternal = false, children }: LinkProps) => {
  return isExternal ? (
    <S.Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </S.Link>
  ) : (
    <NextLink href={href} passHref>
      <S.Link>{children}</S.Link>
    </NextLink>
  );
};
