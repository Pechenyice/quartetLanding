import React from 'react';
import { IKvartet } from '../../types/interfaces';
import { KvartetDisplay } from './../../components';

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
