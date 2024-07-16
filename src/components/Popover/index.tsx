import React, { useEffect, useRef, useState } from 'react'
import { classNames } from '@realkyr/qcore/utils'
import { useClientViewport, useClickOutside } from '@realkyr/qcore/hooks'

import { PopoverProps } from './types.ts'

/**
 * Popover
 *
 * A React component for displaying a popover.
 */
export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  className,
  position = 'bottom-left'
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [calculatedPosition, setCalculatedPosition] = useState(position)
  const popoverRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { clientHeight } = useClientViewport()
  useClickOutside(containerRef, () => {
    console.log('Clicked outside!')
    setIsVisible(false)
  })

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (popoverRef.current && ref.current && position?.includes('bottom')) {
      const rect = popoverRef.current.getBoundingClientRect()
      const refRect = ref.current.getBoundingClientRect()
      const locationIfBottom = refRect.bottom + rect.height

      if (clientHeight > locationIfBottom) {
        setCalculatedPosition(position)
      } else {
        setCalculatedPosition('top-left')
      }
    }
  }, [position, ref.current, popoverRef.current, clientHeight])

  const getPopoverPositionStyles = () => {
    switch (calculatedPosition) {
      case 'top':
        return 'bottom-full mb-2 left-1/2 transform -translate-x-1/2'
      case 'top-left':
        return 'bottom-full mb-2 left-0'
      case 'top-right':
        return 'bottom-full mb-2 right-0'
      case 'bottom':
        return 'top-full mt-2 left-1/2 transform -translate-x-1/2'
      case 'bottom-left':
        return 'top-full mt-2 left-0'
      case 'bottom-right':
        return 'top-full mt-2 right-0'
      case 'left':
        return 'right-full mr-2 top-1/2 transform -translate-y-1/2'
      case 'right':
        return 'left-full ml-2 top-1/2 transform -translate-y-1/2'
      default:
        return 'top-full mt-2 left-1/2 transform -translate-x-1/2'
    }
  }

  return (
    <div ref={containerRef} className='relative inline-block'>
      <div ref={ref} onClick={toggleVisibility} className='cursor-pointer'>
        {children}
      </div>

      <div
        className={classNames([
          `absolute z-10 min-w-48 p-2 bg-white rounded-lg shadow-lg`,
          isVisible ? 'visible' : 'invisible',
          getPopoverPositionStyles(),
          className
        ])}
        ref={popoverRef}
      >
        {content}
      </div>
    </div>
  )
}
