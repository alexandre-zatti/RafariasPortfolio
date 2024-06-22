import React, { ReactNode } from "react";
import clsx from "clsx";

type FullVhSectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export const FullVhSection: React.FC<FullVhSectionProps> = ({children, className, innerClassName}) => {
  return (
    <section className={clsx("flex justify-center", className)}>
      <div
        className={clsx("max-w-screen-2xl grid grid-cols-4 gap-4 pl-4 pr-4 xl:grid-cols-12 xl:gap-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
};
