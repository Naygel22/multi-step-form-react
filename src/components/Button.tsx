import { ReactNode } from 'react'

type ButtonProps = {
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
  const dynamicClassName = className ? `${className}` : 'nextStepButton'

  return (
    <button type="submit" className={dynamicClassName} onClick={onClick}>
      {children}
    </button>
  )
}
