import React from  'react';
import styles from './Nav.module.scss';

type NavLinks = {
  doc: string,
  tutorial: string,
  blog: string,
  community: string
}

export const Nav: React.FunctionComponent<NavLinks> = ({ doc, tutorial, blog, community }) => {
  return(
    <>
    <nav className={styles.nav}>
      <a className={styles.doc} href="/#">{doc}</a>
      <a className={styles.tutorial} href="/#">{tutorial}</a>
      <a className={styles.blog} href="/#">{blog}</a>
      <a className={styles.community} href="/#">{community}</a>
    </nav>
   </>
  )
};