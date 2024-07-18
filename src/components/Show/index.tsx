import { ShowProps } from './types.ts'

const Show = ({ when, children }: ShowProps) => {
  return when ? <>{children}</> : null
}

export default Show
