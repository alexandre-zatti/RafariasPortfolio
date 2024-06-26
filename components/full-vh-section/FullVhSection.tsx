import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FullVhSectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export const FullVhSection: React.FC<FullVhSectionProps> = ({children, className, innerClassName}) => {
  return (
    <section className={cn("min-h-screen", className)}>
      <div
        className={cn("bg-grid min-h-screen grid grid-cols-4 gap-4 pl-4 pr-4 xl:grid-cols-12 xl:gap-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
};
