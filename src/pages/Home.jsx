import logo from '../assets/logo.png';
import arrow from '../assets/next.png';
import arrowB from '../assets/back.png';
import styles from './Home.module.css';
import AddRuleCard from '../components/AddRuleCardHandler/AddRuleCard';
import RuleCard from '../components/RuleCardHandler/RuleCard';
export const Home = () => {
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
                <p>Time Stamp</p>
              </div>
              <div className={styles.button}>
                <button>Done</button>
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
            <RuleCard></RuleCard>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
