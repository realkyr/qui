import React from 'react'
import { RadioButtonGroupProps } from './types'
import RadioButton from './RadioButton'
import { classNames } from '@realkyr/qcore/utils'
import { useControlledState } from '@realkyr/qcore/hooks'

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  className,
  style,
  name,
  options,
  selectedValue: selectedValueProp,
  onChange,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useControlledState(
    selectedValueProp,
    ''
  )
  const handleChange = (value: string) => {
    if (onChange) onChange(value)
    else setSelectedValue(value)
  }

  return (
    <div className={classNames([className])} style={style} {...rest}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </div>
  )
}

export default RadioButtonGroup
