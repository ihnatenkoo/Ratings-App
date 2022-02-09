import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'primary' | 'green' | 'gray' | 'red' | 'ghost';
  children: ReactNode;
  href?: string;
}
