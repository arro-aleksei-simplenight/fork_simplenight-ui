import React from 'react';
import { Paragraph } from '@/components';

interface DocsColorProps {
  variant: 'primary' | 'green' | 'warning' | 'error';
  intensity: number;
  text: string;
  hex: string;
}

const DocsColor = ({ variant, intensity, text, hex }: DocsColorProps) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <div className={`h-4 w-4 rounded-1000 bg-${variant}-${intensity}`} />
        <Paragraph size="small" textColor="text-dark-1000">
          {text}
        </Paragraph>
      </div>
      <div className="pl-6">
        <Paragraph size="small" textColor="text-dark-300">
          {hex}
        </Paragraph>
      </div>
    </div>
  );
};

export default DocsColor;
