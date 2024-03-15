import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'QoL Features',
    Svg: require('@site/static/img/show1.svg').default,
    description: (
      <>
        OptimumFuse provides many important QoL features, which leads to an improved and enjoyable gameplay.
      </>
    ),
  },
  {
    title: 'Modern Optimizations',
    Svg: require('@site/static/img/show2.svg').default,
    description: (
      <>
        OptimumFuse provides immense performance to Minecraft, with must-have features!
      </>
    ),
  },
  {
    title: 'Fast Updates',
    Svg: require('@site/static/img/show3.svg').default,
    description: (
      <>
        OptimumFuse is one of the fastest modpack to update and support the newest Minecraft versions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
