import Card from '../ui/Card';
import { useContext } from 'react';

import QueueContext from '../../store/queue-context';

import classes from './TicketItem.module.css';

function TicketItem(props) {

    const queueCtx = useContext(QueueContext);
    const itemInQueue = queueCtx.itemInQueue(props.id);

    function toggleQueueStatusHandler() {
        if (itemInQueue) {
            queueCtx.removeQueue(props.id)
        } else {
            queueCtx.addQueue({
            id: props.id, 
            priority: props.priority, 
            fname: props.fname,
            lname: props.lname,
            date: props.date,
            notes: props.notes
            });
        }
    }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.priority}</h3>
          <p>{props.fname}</p>
          <p>{props.lname}</p>
          <p>{props.date}</p>
          <p>{props.id}</p>
          <p>{props.notes}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleQueueStatusHandler}>{itemInQueue ? 'Dequeue' : 'Enqueue'}</button>
        </div>
      </Card>
    </li>
  );
}

export default TicketItem;
