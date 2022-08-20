import { useState } from 'react';
import arrowB from '../assets/back.png';
import logo from '../assets/logo.png';
import arrow from '../assets/next.png';
import AddRuleCard from '../components/AddRuleCardHandler/AddRuleCard';
import RuleCard from '../components/RuleCardHandler/RuleCard';
import { months } from '../utils/index';
import styles from './Home.module.css';

export const Home = () => {
  let today = new Date();

  let date =
    today.getFullYear() +
    '-' +
    months[today.getMonth()] +
    '-' +
    today.getDate() +
    '  ' +
    today.getHours() +
    ':' +
    today.getMinutes() +
    ':' +
    today.getSeconds();

  const [button, setButton] = useState(false);
  const [time, setTime] = useState(date);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = () => {
    if (!button) {
      setButton(true);
      setTime(date);
      setIsDisabled(!isDisabled);
    } else if (button) {
      setButton(false);
      setIsDisabled(isDisabled);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.topLeft}>
            <div className={styles.logo}>
              <img src={logo} alt='logo' />
            </div>
            <div className={styles.headOne}>
              <p>Demo Custom App</p>
              <p>APP NAME</p>
            </div>
            <div className={styles.arrow}>
              <img src={arrow} alt='arrow' />
            </div>
            <div className={styles.headOne}>
              <p>Assessment</p>
              <p>STAGE</p>
            </div>
            <div className={styles.arrow}>
              <img src={arrow} alt='arrow' />
            </div>
            <div className={styles.headOne}>
              <p>Create PO</p>
              <p>BUTTON</p>
            </div>
            <div className={styles.arrow}>
              <img src={arrow} alt='arrow' />
            </div>
            <div className={styles.lastButton}>
              <p>Button Rules</p>
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.timeButton}>
              <div className={styles.timeStamp}>
                <p> App Saved On {time}</p>
              </div>
              <div className={styles.button}>
                {
                  <button onClick={handleChange}>
                    {!button ? 'Edit' : 'Done'}
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarCard}>
          <div className={styles.sideBar}>
            <div className={styles.text}>
              <img src={arrowB} alt='arrowB' />
              <p>Back To Stages</p>
            </div>
            <div className={styles.addRuleCard}>
              <AddRuleCard></AddRuleCard>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.displayRuleCard}>
              <RuleCard isDisabled={isDisabled}></RuleCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
