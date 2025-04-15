import React from "react";

interface Props {
  is: boolean;
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

export function When({ is, children, className, fallback = null }: Props) {
  if (className)
    return <div className={className}>{is ? children : fallback}</div>;

  return <>{is ? children : fallback}</>;
}
