import React from "react";

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type Span = number | Partial<Breakpoints>

export interface RowProps {
  gutter?: [number, number];
  className?: string;
  children: React.ReactNode;
}

export interface ColProps {
  span?: Span;
  className?: string;
  children: React.ReactNode;
}