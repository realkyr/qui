import { ReactNode } from 'react'
import { CommonProps } from '../types.ts'

/**
 * PopoverProps
 *
 * Props for the Popover component.
 * - `children`: Element that triggers the popover.
 * - `content`: Content to be displayed inside the popover.
 * - `isVisible`: Whether the popover is visible.
 * - `onVisibleChange`: Callback when the visibility of the popover changes.
 * - `position`: Position of the popover relative to the children.
 */
export interface PopoverProps extends CommonProps {
  children: ReactNode
  content: ReactNode
  isVisible?: boolean
  onVisibleChange?: (
    isVisible: boolean,
    type?: 'click' | 'click-outside'
  ) => void
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
}
