import { CommonInputProps, CommonProps } from '../types.ts'

/**
 * CheckboxProps
 *
 * Props for the Checkbox component.
 * - `label`: The label to display next to the checkbox.
 * - `checked`: Whether the checkbox is checked.
 */
export interface CheckboxProps
  extends CommonProps,
    CommonInputProps<HTMLInputElement> {
  label?: string
  checked?: boolean
}

/**
 * CheckboxGroupProps
 *
 * Props for the CheckboxGroup component.
 * - `name`: The name of the checkbox group.
 * - `options`: An array of options for the checkboxes.
 * - `selectedValues`: The currently selected values.
 * - `onChange`: Change event handler for the group.
 */
export interface CheckboxGroupProps extends CommonProps {
  name: string
  options: Array<{ label: string; value: string }>
  selectedValues?: string[]
  onChange?: (value: string[]) => void
}
