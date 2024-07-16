import { ReactNode } from 'react'
import { CommonProps } from '../types.ts'

/**
 * PopoverProps
 *
 * Props for the Popover component.
 * - `content`: Content to be displayed inside the popover.
 * - `children`: Element that triggers the popover.
 * - `position`: Position of the popover relative to the children.
 */
export interface PopoverProps extends CommonProps {
  content: ReactNode
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
  children: ReactNode
}
