import React from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export function LayoutWrapper({ children, direction = 'column' }: LayoutWrapperProps) {
  return (
    <div className='w-full py-12 md:py-24 lg:py-32'>
      <section>
        <div
          className={`md:container flex items-stretch justify-between w-full flex-col ${
            direction === 'row' ? 'md:flex-row' : 'md:flex-col'
          }`}
        >
          {children}
        </div>
      </section>
    </div>
  );
}