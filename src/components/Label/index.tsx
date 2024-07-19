import { LabelProps } from './types.ts'
import React from 'react'
import { classNames } from '../../../../qcore/lib/utils'

/**
 * Label
 *
 * A React component for displaying a label.
 */
const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  children,
  className,
  style
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(['dark:text-white', className])}
      style={style}
    >
      {text}
      {children}
    </label>
  )
}

export default Label
