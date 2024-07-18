import { ChangeEventHandler, CSSProperties, FocusEventHandler } from 'react'

/**
 * CommonProps
 *
 * Common props for components.
 * - `className`: Additional CSS classes to apply.
 * - `style`: Inline CSS styles.
 */
export interface CommonProps {
  className?: string
  style?: CSSProperties
}

/**
 * CommonInputProps
 *
 * Common props for input components.
 * - `onChange`: Change event handler.
 * - `onFocus`: Focus event handler.
 * - `onBlur`: Blur event handler.
 * - `name`: Name of the input element.
 * - `className`: Additional CSS classes to apply.
 * - `style`: Inline CSS styles.
 * - `id`: Unique identifier for the input element.
 * - `placeholder`: Placeholder text for the input.
 * - `value`: Value of the input.
 * - `disabled`: Disables the input if true.
 */
export interface CommonInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  name?: string
  className?: string
  style?: CSSProperties
  id?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  readonly?: boolean
}
