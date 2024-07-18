import { CommonProps } from '../types.ts'
import { ReactNode } from 'react'

/**
 * LabelProps
 *
 * Props for the Label component.
 * - `text`: Text content of the label.
 * - `htmlFor`: Associates the label with a specific input element.
 * - `children`: Child elements to render inside the label.
 */
export interface LabelProps extends CommonProps {
  text?: string
  htmlFor?: string
  children?: ReactNode
}
