import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="container flex h-screen max-w-xl flex-col place-content-center px-4 text-center">
      {children}
    </main>
  )
}
