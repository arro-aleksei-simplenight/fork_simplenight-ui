import React from 'react';
import { render } from '@testing-library/react';
import ExternalLink from './ExternalLink';

describe('Button', () => {
  test('Renders the external link component', () => {
    render(
      <ExternalLink href="#" className="nothing">
        Falopa
      </ExternalLink>,
    );
  });
});
