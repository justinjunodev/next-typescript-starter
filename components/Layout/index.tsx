import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container h-screen max-w-xl flex flex-col place-content-center text-center px-4">
      {children}
    </div>
  );
};
