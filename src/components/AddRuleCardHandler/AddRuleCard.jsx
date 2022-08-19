import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dots from '../../assets/six-dots.png';
import { addRules } from '../../redux/action';
import styles from './AddRuleCard.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const AddRuleCard = () => {
  const [text, setText] = useState('');
  const rules = useSelector((store) => store.rules);
  const ruleLengthArr = useSelector((store) => store.rules.length);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (ruleLengthArr <= 4) {
      dispatch(
        addRules({
          title: text.trim(),
          status: false,
        })
      );
    } else {
      return alert('Cannot Add more then 5 Rules');
    }
  };

  return (
    <>
      <div className={styles.addRule}>
        <div className={styles.totalRules}>
          <p>Rules</p>
        </div>

        <div className={styles.div}>
          <img src={dots} alt='' />
          <input type='text' onChange={(e) => setText(e.target.value)}></input>
        </div>

        <div className={styles.showRules}>
          {rules.map((rule) => (
            <div className={styles.eachRule}>
              <p>{rule.title}</p>
              <Switch {...label} defaultChecked />
            </div>
          ))}
        </div>
        <div className={styles.addRuleButton}>
          <button onClick={handleAdd}>Add Rule</button>
        </div>
      </div>
    </>
  );
};

export default AddRuleCard;
