import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Typical from 'react-typical'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img alt="Docusaurus with Keytar" height="180" class="heroLogo" src="/img/logo.svg"/>
        <h1 className="hero__title">
          <Typical
          steps={[siteConfig.title, 3000, 'Kaltim', 2000]}
          loop={Infinity}
          />
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            style={{ margin: 4 }}
            className="button button--secondary button--lg"
            to="/docs/intro">
             📖 Materi
          </Link>
          <Link
            style={{ margin: 4 }}
            className="button button--secondary button--lg"
            to="/peraturan/intro">
             📕 Peraturan
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Halo dari ${siteConfig.title}`}
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
