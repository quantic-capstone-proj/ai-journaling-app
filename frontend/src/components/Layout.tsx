import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1>AI Journaling App</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
