import { LabelProps } from './types.ts'
import React from 'react'

/**
 * Label
 *
 * A React component for displaying a label.
 */
export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  children,
  className,
  style
}) => {
  return (
    <label htmlFor={htmlFor} className={className} style={style}>
      {text}
      {children}
    </label>
  )
}
