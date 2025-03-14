import { useRef } from 'react';
import { GiStoneBlock } from 'react-icons/gi';
import { PiGearFill, PiHouseFill, PiTerminalWindowFill } from 'react-icons/pi';
import { Link } from 'react-router';
import { scaleValue } from 'utils/scale';
import { MacIconWrapper } from '../MacIcon/MacIconWrapper';
import styles from './Dock.module.scss';

const maxAdditionalSize = 5;

export const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize],
    );

    dockRef.current.style.setProperty(
      '--dock-offset-left',
      `${offsetPixels * -1}px`,
    );

    dockRef.current.style.setProperty(
      '--dock-offset-right',
      `${offsetPixels}px`,
    );
  };

  return (
    <nav ref={dockRef} className={styles.dock}>
      <ul>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/">
            <MacIconWrapper>
              <PiHouseFill />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Home</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/term">
            <MacIconWrapper>
              <PiTerminalWindowFill />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Terminal</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/">
            <MacIconWrapper>
              <GiStoneBlock />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Craft</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/">
            <MacIconWrapper>
              <PiGearFill />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Settings</span>
        </li>
      </ul>
    </nav>
  );
};
