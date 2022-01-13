import React from 'react';
import {
  IKvartetMember,
  IMemberScreenOptions,
  IMemberScreenProps,
  IScreenProps,
  IScreenOptions,
  IScreenWithOptionsProps,
} from '@Types/interfaces';

const withMemberData = (
  Component: (props: IMemberScreenProps) => JSX.Element,
  member: IKvartetMember,
  options: IMemberScreenOptions
) => {
  const brainedComponent = ({ isActive, isMobile, onAppeared }: IScreenProps) => (
    <Component
      member={member}
      isActive={isActive}
      isMobile={isMobile}
      onAppeared={onAppeared}
      options={options}
    />
  );

  return brainedComponent;
};

const withOptions = (
  Component: (props: IScreenWithOptionsProps) => JSX.Element,
  options: IScreenOptions
) => {
  const decoratedComponent = ({ isActive, isMobile, onAppeared }: IScreenProps) => (
    <Component
      isActive={isActive}
      isMobile={isMobile}
      onAppeared={onAppeared}
      options={options as IScreenOptions}
    />
  );

  return decoratedComponent;
};

export { withMemberData, withOptions };
