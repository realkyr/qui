import { MouseEventHandler, ReactNode } from 'react'
import { CommonProps } from '../types.ts'

/**
 * ButtonProps
 *
 * Props for the Button component.
 * - `disabled`: Disables the button if true.
 * - `onClick`: Click event handler.
 * - `type`: Visual style of the button (`primary`, `dashed`, `default`).
 * - `shape`: Shape of the button (`default`, `circle`, `round`).
 * - `children`: Button content.
 */
export interface ButtonProps extends CommonProps {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'primary' | 'dashed' | 'default'
  shape?: 'default' | 'circle' | 'round'
  children: ReactNode
}
