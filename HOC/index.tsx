import React from 'react';
import {
  IKvartetMember,
  IMemberScreenOptions,
  IMemberScreenProps,
  IScreenProps,
} from '@Types/interfaces';

const withMemberData = (
  Component: (props: IMemberScreenProps) => JSX.Element,
  member: IKvartetMember,
  options: IMemberScreenOptions
) => {
  const brainedComponent = ({ isActive }: IScreenProps) => (
    <Component member={member} isActive={isActive} options={options} />
  );

  return brainedComponent;
};

export { withMemberData };
