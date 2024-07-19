import { CommonInputProps, CommonProps } from '../types.ts'

/**
 * TextAreaProps
 *
 * Props for the TextArea component.
 * - `cols`: Number of columns for the textarea.
 * - `width`: Width of the textarea.
 * - `rows`: Number of rows for the textarea.
 * - `resize`: Allows textarea to be resizable if true.
 * - `autoGrow`: Automatically adjusts the number of rows based on content.
 */
export interface TextAreaProps
  extends CommonProps,
    CommonInputProps<HTMLTextAreaElement> {
  rows?: number
  cols?: number
  width?: number | string
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  autoGrow?: boolean
}
