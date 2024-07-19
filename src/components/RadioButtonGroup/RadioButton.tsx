import React from 'react'
import { RadioButtonProps } from './types'
import { classNames } from '@realkyr/qcore/utils'
import { useControlledState } from '@realkyr/qcore/hooks'

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  disabled = false,
  style,
  onChange,
  name,
  id,
  value,
  checked,
  label,
  readonly = false,
  ...rest
}) => {
  const [_checked, setChecked] = useControlledState(checked, false)
  // Define class names based on props
  const baseClasses = 'flex items-center'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const radioClasses = 'form-radio text-blue-600'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange && onChange(e)
  }

  return (
    <label
      className={classNames([baseClasses, disabledClasses, className])}
      style={style}
    >
      <input
        type='radio'
        name={name}
        id={id}
        className={classNames([radioClasses, 'outline-none'])}
        disabled={disabled}
        readOnly={readonly}
        onChange={handleChange}
        value={value}
        checked={_checked}
        {...rest}
      />
      {label && <span className='ml-2'>{label}</span>}
    </label>
  )
}

export default RadioButton
