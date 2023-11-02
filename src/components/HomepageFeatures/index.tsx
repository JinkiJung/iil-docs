import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Versatile and easy to use',
    Svg: undefined,
    description: (
      <>
        You can use iil for any kind of sequences just like a Lego block.
      </>
    ),
  },
  {
    title: 'Completion matters',
    Svg: undefined,
    description: (
      <>
        iil helps you to build a mindset on how the work will be completed with <code>finish if</code>.
      </>
    ),
  },
  {
    title: 'Dependency and consequence relationships',
    Svg: undefined,
    description: (
      <>
        iil distinguishes a pairwise relationship between iil models by parent-child and consequence relationships, which helps you to build a divide-and-conquer strategy.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}