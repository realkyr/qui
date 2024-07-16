import React from 'react'
import { ButtonProps } from './types.ts'

const Button: React.FC<ButtonProps> = ({
  className,
  disabled = false,
  style,
  onClick,
  type = 'default',
  shape = 'default',
  children
}) => {
  // Define class names based on props
  const baseClasses = 'py-2 px-4 font-semibold text-center'
  const typeClasses = {
    primary: 'bg-primary text-white',
    dashed: 'border border-dashed',
    default: 'bg-gray-200'
  }[type]

  const shapeClasses = {
    default: 'rounded',
    circle: 'rounded-full',
    round: 'rounded-lg'
  }[shape]

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      className={`${baseClasses} ${typeClasses} ${shapeClasses} ${disabledClasses} ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
