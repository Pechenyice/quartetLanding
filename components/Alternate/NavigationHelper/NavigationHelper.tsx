import React from 'react';
import styles from '@Styles/Alternate/NavigationHelper/NavigationHelper.module.css';
import { Navigation as navigation } from '@Types/enums';
import { combineClasses } from '@Utils';
import { INavigationHelper } from '@Types/interfaces';

const NavigationHelper = ({ userNavigates }: { userNavigates: INavigationHelper }) => {
  return (
    <section
      className={combineClasses(styles.wrapper, userNavigates?.visible ? styles.active : '')}
    >
      <div className={styles.content}>
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.5L17 6.5M17 6.5C17 6.5 14.7445 5.75752 13.6109 4.80769C12.2399 3.65903 11.069 1 11.069 1M17 6.5C17 6.5 14.7445 7.24248 13.6109 8.19231C12.2399 9.34097 11.069 12 11.069 12"
            stroke="#BD8F75"
            strokeWidth="1.03125"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
        </svg>
        <p>
          {`0${(userNavigates?.screen as number) + 1}`.slice(-2)}.{' '}
          {navigation[userNavigates?.screen as number]}
        </p>
      </div>
    </section>
  );
};

export default NavigationHelper;
