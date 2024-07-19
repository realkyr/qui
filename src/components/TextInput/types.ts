import { ReactNode } from 'react'
import { CommonInputProps, CommonProps } from '../types.ts'

/**
 * TextInputProps
 *
 * Props for the TextInput component.
 * - `prefix`: Element to display before the input.
 * - `suffix`: Element to display after the input.
 */
export interface TextInputProps
  extends CommonProps,
    CommonInputProps<HTMLInputElement> {
  prefix?: ReactNode
  suffix?: ReactNode
}
