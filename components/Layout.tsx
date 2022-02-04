import * as React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
