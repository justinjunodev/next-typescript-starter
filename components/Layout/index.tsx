import React from 'react';
import * as S from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};
