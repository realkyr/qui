import React from 'react';
import {RowProps} from "../types.ts";

const Row: React.FC<RowProps> = ({gutter = [16, 16], className = '', children}) => {
  const style = {
    '--gutter-x': `${gutter[0]}px`,
    '--gutter-y': `${gutter[1]}px`,
  } as React.CSSProperties;

  return (
    <div className={`row ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Row;
