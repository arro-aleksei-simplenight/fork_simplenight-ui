import React from 'react';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function ExternalLink({ href, children, className, ...others }: LinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...others}
    >
      {children}
    </a>
  );
}

ExternalLink.defaultProps = { className: '' };

export default ExternalLink;
