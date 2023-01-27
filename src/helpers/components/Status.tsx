import React from 'react';
import { Paragraph } from '@/components';
import { CheckIcon, Pen, Wrench } from '@/icons';

export interface StatusProps {
  title: string;
  description?: string;
  icon?: 'edit' | 'wrench' | 'check';
  variant?: 'green' | 'primary' | 'warning' | 'error';
  full?: boolean;
}

const Status = ({
  title,
  description = '',
  variant,
  icon,
  full,
}: StatusProps) => {
  const setIcon = () => {
    if (icon === 'wrench') return <Wrench className={`text-${variant}-1000`} />;
    if (icon === 'check')
      return <CheckIcon className={`text-${variant}-1000`} />;
    return <Pen className={`text-${variant}-1000`} />;
  };

  return (
    <div
      className={`flex flex-col gap-1 rounded-4 bg-${variant}-200 p-2 ${
        full ? 'w-full' : 'max-w-fit'
      }`}
    >
      <div className="flex gap-2 w-full items-center">
        <div className="h-4 w-4">{setIcon()}</div>
        <Paragraph
          size="small"
          fontWeight="semibold"
          className={`text-${variant}-1000`}
        >
          {title}
        </Paragraph>
      </div>
      <div className="pl-6">
        {description && (
          <Paragraph size="xsmall" textColor="text-dark-1000">
            {description}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

Status.defaultProps = {
  description: '',
  icon: 'edit',
  variant: 'green',
  full: false,
};

export default Status;
