import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageImage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="container">
      <div className="text--center">
        <div className="padding--lg"><h1>Describe a task step clearly how it starts and finishes.</h1></div>
        <div><img src={require('@site/static/img/iil-base.drawio.png').default} className='padding--md'/></div>
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} documentation webpage`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageImage />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
