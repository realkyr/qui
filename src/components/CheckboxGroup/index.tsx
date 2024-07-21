import React from 'react'
import { CheckboxGroupProps } from './types'
import Checkbox from './Checkbox'
import { classNames } from '@realkyr/qcore/utils'
import { useControlledState } from '@realkyr/qcore/hooks'

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  style,
  name,
  options,
  selectedValues: selectedValuesProp,
  onChange,
  ...rest
}) => {
  const [selectedValues, setSelectedValues] = useControlledState<string[]>(
    selectedValuesProp,
    []
  )

  const handleChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value]

    if (onChange) onChange(newSelectedValues)
    else setSelectedValues(newSelectedValues)
  }

  return (
    <div className={classNames([className])} style={style} {...rest}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={selectedValues.includes(option.value)}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </div>
  )
}

export default CheckboxGroup
