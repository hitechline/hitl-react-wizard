import { mergeClassNames } from '@hitechline/react';
import React, { useEffect } from 'react';

import useWizard from '../hooks/useWizard';
import { StepsProps } from '../types';

const Steps = ({ children, className, ...props }: StepsProps): JSX.Element => {
  const { current, getStep, registerSteps } = useWizard();

  useEffect(() => {
    registerSteps(children);
  }, []);

  return (
    <div {...props} className={mergeClassNames('wizard-steps', className)}>
      {getStep(current)}
    </div>
  );
};

export default Steps;
