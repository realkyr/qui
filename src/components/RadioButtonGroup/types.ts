import { CommonInputProps, CommonProps } from '../types.ts'

/**
 * RadioButtonProps
 *
 * Props for the RadioButton component.
 * - `label`: The label to display next to the radio button.
 * - `checked`: Whether the radio button is checked.
 */
export interface RadioButtonProps
  extends CommonProps,
    CommonInputProps<HTMLInputElement> {
  label?: string
  checked?: boolean
}

/**
 * RadioButtonGroupProps
 *
 * Props for the RadioButtonGroup component.
 * - `name`: The name of the radio button group.
 * - `options`: An array of options for the radio buttons.
 * - `selectedValue`: The currently selected value.
 * - `onChange`: Change event handler for the group.
 */
export interface RadioButtonGroupProps extends CommonProps {
  name: string
  options: Array<{ label: string; value: string }>
  selectedValue?: string
  onChange?: (value: string) => void
}
