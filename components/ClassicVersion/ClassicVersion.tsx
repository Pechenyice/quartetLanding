import { IVersionProps } from '@Types/interfaces';
import React from 'react';
import { Main, VersionManager, Member, Quotes, Events, Archive, CustomMedia } from '@Components';
import { Polina, Alex, PolinaK, Varvara } from '@Members';
import {
  AlexMobileDecorators,
  PolinaMobileDecorators,
  PolinaKMobileDecorators,
  VarvaraMobileDecorators,
} from '@Members/decorators';
import {
  quotesMobileDecorators,
  eventsMobileDecorators,
  archiveMobileDecorators,
} from '@Decorators';

const ClassicVersion = ({ onChangePresentation, textFor }: IVersionProps) => {
  return (
    <>
      <Main isActive={true} isMobile={true} />
      <Member
        member={Polina}
        options={{
          reversed: false,
          decorators: PolinaMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
      />
      <Member
        member={Alex}
        options={{
          reversed: true,
          decorators: AlexMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
      />
      <Member
        member={PolinaK}
        options={{
          reversed: false,
          decorators: PolinaKMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
      />
      <Member
        member={Varvara}
        options={{
          reversed: true,
          decorators: VarvaraMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
      />
      <Quotes options={{ decorators: quotesMobileDecorators }} isActive={true} isMobile={true} />
      <Events options={{ decorators: eventsMobileDecorators }} isActive={true} isMobile={true} />
      <Archive options={{ decorators: archiveMobileDecorators }} isActive={true} isMobile={true} />
      <CustomMedia isActive={true} isMobile={true} />
      <VersionManager onChangePresentation={onChangePresentation} textFor={textFor} fixed />
    </>
  );
};

export default ClassicVersion;
