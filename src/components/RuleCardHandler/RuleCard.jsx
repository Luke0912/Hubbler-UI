import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import del from '../../assets/del.png';
import start from '../../assets/start.png';
import { addActions, deleteAllActions } from '../../redux/action';
import styles from './RuleCard.module.css';

const RuleCard = ({ isDisabled }) => {
  const [action, setAction] = useState('');
  const actions = useSelector((store) => store.actions);
  const actionLengthArr = useSelector((store) => store.actions.length);
  const dispatch = useDispatch();

  const handleAction = () => {
    if (actionLengthArr <= 4) {
      dispatch(
        addActions({
          action: action.trim(),
          status: false,
          id: nanoid(5),
        })
      );
    } else {
      return alert('Cannot Add more then 5 Actions');
    }
  };

  const deleteActions = () => {
    dispatch(deleteAllActions());
  };

  return (
    <div className={styles.card}>
      <div className={styles.editCardName}>
        <div className={styles.cardName}>
          <p>Button Name</p>
        </div>
        <div className={styles.editCardName}>
          {<input type='text' disabled={isDisabled} />}
        </div>
      </div>

      <div className={styles.conditions}>
        <div className={styles.cardCondition}>
          <select name='' id='' disabled={isDisabled}>
            <option value='none'>If all</option>
          </select>
          <p>of the following conditions are meet</p>
        </div>
        <div className={styles.collection}>
          <select name='' id='' disabled={isDisabled}>
            <option value='text'>Text</option>
            <option value='starter'>Starter </option>
            <option value='addnew'>Add New</option>/>option>
            <option value='opne'>Open</option>
          </select>
          <select name='' id='' disabled={isDisabled}>
            <option value='contains'>Contains</option>
            <option value='start'>Start</option>
            <option value='new'>New</option>
            <option value='Operate'>Operate</option>
          </select>
          <input type='text' disabled={isDisabled} placeholder="Type to search and add" />
          <img src={del} alt='' />
        </div>
        <div className={styles.Button}>
          <button disabled={isDisabled}>Add New Condition</button>
        </div>
      </div>

      <hr />

      <div className={styles.action}>
        <div className={styles.actionName}>
          <p>Perform the following action :</p>
        </div>
        <div className={styles.actionInput}>
          <input
            type='text'
            onChange={(e) => setAction(e.target.value)}
            disabled={isDisabled}
          />
          <img src={start} alt='' />
          <img src={del} alt='' onClick={deleteActions} />
          <label className={styles.setup}>Setup</label>
        </div>
      </div>

      <div className={styles.actionOutput}>
        {actions.map((e) => (
          <p>{e.action}</p>
        ))}
      </div>

      <hr className={styles.hrColor} />

      <div className={styles.addAction}>
        <div className={styles.Button}>
          <button disabled={isDisabled} onClick={handleAction}>
            Add another action
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuleCard;
