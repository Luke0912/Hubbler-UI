import styles from './RuleCard.module.css';

const RuleCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.editCardName}>
        <div className={styles.cardName}>
          <p>Button Name</p>
        </div>
        <div className={styles.editCardName}>
          <input type='text' />
        </div>
      </div>

      <div className={styles.conditions}>
        <div className={styles.cardCondition}>
          <select name='' id=''>
            <option value='none'>
              Select an Option
            </option>
            <option value='free'>Free</option>
            <option value='starter'>Starter </option>
            <option value='professional'>Professional</option>
            <option value='corporate'>Corporate</option>
          </select>
          <p>of the following conditions are meet</p>
        </div>
        <div className={styles.collection}>
          <select name='' id=''>
            <option value='none'>Select an Option</option>
            <option value='free'>Free</option>
            <option value='starter'>Starter </option>
            <option value='professional'>Professional</option>
            <option value='corporate'>Corporate</option>
          </select>
          <select name='' id=''>
            <option value='none'>Select an Option</option>
            <option value='free'>Free</option>
            <option value='starter'>Starter </option>
            <option value='professional'>Professional</option>
            <option value='corporate'>Corporate</option>
          </select>
          <input type='text' />
        </div>
        <div className={styles.Button}>
          <button>Add New Condition</button>
        </div>
      </div>

      <hr />

      <div className={styles.action}>
        <div className={styles.actionName}>
          <p>Perform the following action :</p>
        </div>
        <div className={styles.actionInput}>
          <input type='text' />
        </div>
      </div>

      <hr className={styles.hrColor} />

      <div className={styles.addAction}>
        <div className={styles.Button}>
          <button>Add another action</button>
        </div>
      </div>
    </div>
  );
};

export default RuleCard;
