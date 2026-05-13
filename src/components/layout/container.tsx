import React from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn("max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 w-full", className)}
    >
      {children}
    </div>
  );
}
