import type { ReactNode } from "react";

interface MessageProps {
  type?: "error" | "warn" | "success" | "info";
  children: ReactNode;
}

export function Message({ type = "warn", children }: MessageProps) {
  return <p className={`message message-${type}`}>{children}</p>;
}
