import { classNames } from '@realkyr/qcore/utils'

import { TextInputProps } from './types.ts'
import React from 'react'

const TextInput: React.FC<TextInputProps> = ({
  className,
  disabled = false,
  style,
  onChange,
  placeholder,
  value,
  prefix,
  suffix,
  name,
  ...rest
}) => {
  // Define class names based on props
  const baseClasses = 'py-2 px-4 border rounded text-sm'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const inputClasses = 'w-full'

  return (
    <div
      className={`flex items-center ${baseClasses} ${disabledClasses} ${className}`}
      style={style}
    >
      {prefix && <span className='mr-2'>{prefix}</span>}
      <input
        type='text'
        name={name}
        className={classNames([inputClasses, 'outline-none'])}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {suffix && <span className='ml-2'>{suffix}</span>}
    </div>
  )
}

export default TextInput
