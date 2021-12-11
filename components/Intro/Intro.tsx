import React from 'react';
import { IKvartet } from '@Types/interfaces';
import { KvartetDisplay } from '@Components/index';

export default function Intro({ kvartet }: IKvartet): JSX.Element {
  return (
    <section>
      <div>
        test
        <KvartetDisplay kvartet={kvartet} />
      </div>
    </section>
  );
}
