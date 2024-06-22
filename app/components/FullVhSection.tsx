import React, { ReactNode } from "react";

type FullVhSectionProps = {
  children: ReactNode
  className?: string
}

export const FullVhSection: React.FC<FullVhSectionProps> = ({children, className}) => {

  return (
    <section className={`flex justify-center ${className}`}>
      <div className="max-w-screen-2xl grid grid-cols-4 gap-4 pl-4 pr-4 xl:grid-cols-12 xl:gap-8">
        {children}
      </div>
    </section>
  )

}