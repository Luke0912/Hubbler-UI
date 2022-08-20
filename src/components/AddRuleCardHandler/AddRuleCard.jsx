import { addRules, deleteAll, } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

import Switch from '@mui/material/Switch';
import del from '../../assets/del.png';
import dots from '../../assets/six-dots.png';
import { nanoid } from 'nanoid';
import styles from './AddRuleCard.module.css';
import { useState } from 'react';

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
          id: nanoid(5),
        })
      );
    } else {
      return alert('Cannot Add more then 5 Rules');
    }
  };


  const handleDelete = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      <div className={styles.addRule}>
        <div className={styles.totalRules}>
          <p>Rules {ruleLengthArr}</p>
        </div>

        <div className={styles.div}>
          <img src={dots} alt='' />
          <input type='text' onChange={(e) => setText(e.target.value)}></input>
        </div>

        <div className={styles.showRules}>
          {rules.map((rule) => (
            <div className={styles.eachRule} key={rule.id}>
              <p>{rule.title}</p>
              <Switch
                {...label}
                defaultunchecked='false'
              />
            </div>
          ))}
        </div>
        <div className={styles.addRuleButton}>
          <button onClick={handleAdd}>Add Rule</button>
        </div>
        <div className={styles.deleteAll}>
          <p onClick={handleDelete}>Delete All</p>
          <img src={del} alt='del all' onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default AddRuleCard;
