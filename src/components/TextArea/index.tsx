import React, { ChangeEvent, useEffect, useRef } from 'react'
import { TextAreaProps } from './types'
import { classNames } from '@realkyr/qcore/utils'
import { useControlledState } from '@realkyr/qcore/hooks'

const RESIZE_CLASSES = {
  none: 'resize-none',
  both: 'resize-both',
  horizontal: 'resize-horizontal',
  vertical: 'resize-vertical'
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  disabled = false,
  style,
  onChange,
  placeholder,
  value: valueProp,
  name,
  readonly = false,
  rows,
  cols,
  resize = 'none',
  autoGrow = false,
  ...rest
}) => {
  const [value, setValue] = useControlledState(valueProp, undefined)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event)
    } else {
      setValue(event.target.value)
    }
  }

  useEffect(() => {
    if (autoGrow) {
      const textArea = textAreaRef.current
      if (textArea) {
        textArea.style.height = 'auto'
        textArea.rows = 1
        textArea.style.height = `${textArea.scrollHeight}px`
      }
    }
  }, [autoGrow, value])

  // Define class names based on props'
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const textAreaClasses = classNames([
    'border rounded text-sm',
    RESIZE_CLASSES[resize],
    resize === 'vertical' ? 'min-h-10' : '',
    'p-2 outline-none dark:bg-input-dark'
  ])

  return (
    <textarea
      ref={textAreaRef}
      name={name}
      style={style}
      className={classNames([className, disabledClasses, textAreaClasses])}
      disabled={disabled}
      readOnly={readonly}
      onChange={handleOnChange}
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      {...rest}
    />
  )
}

export default TextArea
