import { CommonInputProps, CommonProps } from '../types.ts'

export interface Options {
  label: string
  value: string
}

/**
 * Defines the properties for the Dropdown component.
 *
 * @interface DropdownProps
 * @extends {Omit<CommonInputProps, 'onChange'>}
 * @extends {CommonProps}
 *
 * @property {Options[]} options - The list of options to display in the dropdown. Each option should have a label and a value.
 * @property {(value: string) => void} [onSelect] - An optional callback function that is triggered when an option is selected. The selected option's value is passed as an argument.
 *
 * @interface Options
 * @property {string} label - The display label for the dropdown option.
 * @property {string} value - The corresponding value for the dropdown option.
 */
export interface DropdownProps
  extends Omit<CommonInputProps, 'onChange'>,
    CommonProps {
  onSelect?: (value: string) => void
  options: Options[]
}
