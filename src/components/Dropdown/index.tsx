import React, { useMemo, useState } from 'react'
import { DropdownProps, Options } from './types.ts'
import TextInput from '../TextInput'
import Popover from '../Popover'
import Show from '../Show'
import { classNames } from '../../../../qcore/lib/utils'

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  value,
  onSelect,
  className,
  dropdownContainerClassName,
  style,
  disabled,
  name
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  // const [searchValue, setSearchValue] = useState('')

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const handleSelectOption = (option: Options) => {
    setSelectedValue(option.value)
    setIsVisible(false)
    if (onSelect) {
      onSelect(option.value)
    }
  }

  const label = useMemo(() => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    )
    return selectedOption ? selectedOption.label : ''
  }, [options, selectedValue])

  return (
    <div className='relative inline-block w-full'>
      <Popover
        isVisible={isVisible}
        onVisibleChange={setIsVisible}
        content={
          <div
            className={classNames([
              dropdownContainerClassName,
              'bg-white rounded-lg mt-2 dark:bg-input-dark text-left',
              'overflow-y-auto max-h-32'
            ])}
          >
            <Show when={options.length === 0}>
              <div className='p-2 text-center'>No Data available</div>
            </Show>

            <Show when={options.length > 0}>
              {options.map((option, index) => (
                <div
                  key={index}
                  className='py-2 px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-hover'
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </Show>
          </div>
        }
        className='w-full overflow-hidden'
        position='bottom'
      >
        <div onClick={handleToggleVisibility} className='cursor-pointer w-full'>
          <TextInput
            className={`w-full ${className}`}
            style={style}
            disabled={disabled}
            placeholder={placeholder}
            value={label}
            readonly
            name={name}
            onChange={() => {}}
          />
        </div>
      </Popover>
    </div>
  )
}

export default Dropdown
