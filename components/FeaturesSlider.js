import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./FeaturesSlider.module.css";

const settings = {
  duration: 600,
  delay: 4000,
};

const items = [
  {
    title: 'Front-End Development',
  },
  {
    title: 'Back-End Development',
  },
  {
    title: 'Complex UI Animations',
  },
  {
    title: 'Web Perfomance',
  },
  {
    title: 'Responsive Interfaces',
  },
  {
    title: 'Making Users Happy',
  }
];

export default function FeaturesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cycle = () => {
    setCurrentIndex(prev => {
      const reachedLastItem = prev === (items.length - 1);
      return reachedLastItem ? 0 : (prev + 1);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      cycle();
    }, settings.delay);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const isCurrent = currentIndex === index;
        let isNext = (currentIndex - index) === -1;
        let isPrev = (currentIndex - index) === 1;

        if (currentIndex === 0) {
          isPrev = index === (items.length - 1);
        }

        if (currentIndex === items.length - 1) {
          isNext = index === 0;
        }

        return (
          <div key={index} className={classNames({
            [styles.item]: true,
            [styles.current]: isCurrent,
            [styles.next]: isNext,
            [styles.prev]: isPrev,
          })}>
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
