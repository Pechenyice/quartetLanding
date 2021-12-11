import Image from 'next/image';
import React from 'react';
import { IKvartet } from '@Types/interfaces';

export default function KvartetDisplay({ kvartet }: IKvartet): JSX.Element {
  let kvartetPreview = kvartet.map((m, i) => (
    <Image key={`${m.name}-${i}`} src={`/${m.preview}`} width="200px" height="200px" />
  ));
  let kvartetNames = kvartet.map((m) => m.name);
  let kvartetAbouts = kvartet.map((m) => m.about);

  return (
    <>
      <section>{kvartetPreview}</section>
      <section>{kvartetNames}</section>
      <section>{kvartetAbouts}</section>
    </>
  );
}
