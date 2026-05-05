import { HTMLAttributes } from 'react';

export function Card({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}