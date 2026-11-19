import type { CSSProperties, ReactNode } from "react";

interface ButtonListProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function ButtonList({ children, style }: ButtonListProps) {
  return (
    <div className="button-list-wrapper" style={style}>
      {children}
    </div>
  );
}
