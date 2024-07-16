import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

/**
 * ButtonProps
 *
 * Props for the Button component.
 * - `className`: Additional CSS classes to apply.
 * - `disabled`: Disables the button if true.
 * - `style`: Inline CSS styles.
 * - `onClick`: Click event handler.
 * - `type`: Visual style of the button (`primary`, `dashed`, `default`).
 * - `shape`: Shape of the button (`default`, `circle`, `round`).
 * - `children`: Button content.
 */
export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'dashed' | 'default';
  shape?: 'default' | 'circle' | 'round';
  children: ReactNode;
}