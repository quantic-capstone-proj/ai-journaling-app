import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyle = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  }

  const variantStyle = variant === 'primary'
    ? { backgroundColor: '#646cff', color: 'white' }
    : { backgroundColor: '#e8e8e8', color: '#333' }

  return (
    <button style={{ ...baseStyle, ...variantStyle }} {...props}>
      {children}
    </button>
  )
}
