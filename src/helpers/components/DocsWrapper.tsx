import React from 'react';

export interface DocsWrapperProps {
  width: number;
  children: React.ReactNode;
}

const DocsWrapper = ({ width = 500, children }: DocsWrapperProps) => (
  <div
    style={{
      margin: '0 auto',
      padding: '20px',
      width: '100%',
      maxWidth: `${width}px`,
    }}
  >
    {children}
  </div>
);

export default DocsWrapper;
