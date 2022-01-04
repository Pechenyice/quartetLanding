import React, { useRef } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@Styles/Home.module.css';
import * as members from '@Members/index';
import {
  Featuring,
  FloorsDisplay,
  Footer,
  Gallery,
  Intro,
  KvartetDisplay,
  Media,
} from '@Components/index';
import { KvartetMember } from '@Types/index';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);

  let [floor, setFloor] = useState(1);

  let app = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);

  useEffect(() => {
    let sections = Array.from(app.current?.children).filter((s) => s.localName === 'section');
    sections.reverse();
    document.addEventListener('scroll', () => {
      for (let section in sections) {
        if (sections[section].getBoundingClientRect().top <= screen.height / 2) {
          setFloor(sections.length - +section);
          return;
        }
      }
    });
  }, []);

  return (
    <section className={styles.app} ref={app}>
      <FloorsDisplay floor={floor} />
      <Intro kvartet={_kvartet} />
      <KvartetDisplay kvartet={_kvartet} />
      <Featuring />
      <Gallery />
      <Media />
      <Footer kvartet={_kvartet} />
    </section>
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
