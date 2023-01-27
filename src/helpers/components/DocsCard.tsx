import React from 'react';
import { Heading, Paragraph } from '@/components';

interface DocsCardProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

const DocsCard = ({ label, title, children }: DocsCardProps) => {
  return (
    <div
      className="rounded-8 p-10 border-l-8 border-l-primary-1000 flex flex-col gap-4"
      style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.16)' }}
    >
      <div className="flex flex-col">
        <Paragraph size="medium" textColor="text-dark-700">
          {label}
        </Paragraph>
        <Heading tag="h4" textColor="text-dark-1000">
          {title}
        </Heading>
      </div>
      {children}
    </div>
  );
};

export default DocsCard;
