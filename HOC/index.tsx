import React from 'react';
import { IKvartetMember, IMemberScreenProps, IScreenProps } from '@Types/interfaces';

const withMemberData = (
  Component: (props: IMemberScreenProps) => JSX.Element,
  member: IKvartetMember
) => {
  const brainedComponent = (isActive: IScreenProps) => <Component member={member} isActive />;

  return brainedComponent;
};

export { withMemberData };
