import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@Styles/Home.module.css';
import * as members from '@Members/index';
import { Intro } from '@Components/index';
import { KvartetMember } from '@Types/index';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);
  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);
  return (
    <>
      <Intro kvartet={_kvartet} />
    </>
  );
};

export function getStaticProps(): { props: { kvartet: string } } {
  let serializedMembers = KvartetMember.serializeMembers([...Object.values(members)]);
  return {
    props: {
      kvartet: JSON.stringify(serializedMembers),
    },
  };
}

export default Home;
