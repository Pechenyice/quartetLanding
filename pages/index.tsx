import React, { useRef } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '@Styles/Home.module.css';
import * as members from '@Members/index';
import { FloorsDisplay, Intro, KvartetDisplay } from '@Components/index';
import { KvartetMember } from '@Types/index';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);

  let [floor, setFloor] = useState(1);

  let app = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);

  useEffect(() => {
    let sections = Array.from(app.current?.children);
    sections.reverse();
    document.addEventListener('scroll', () => {
      for (let section in sections) {
        if (sections[section].getBoundingClientRect().top <= 0) {
          setFloor(sections.length - 1 - +section);
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
