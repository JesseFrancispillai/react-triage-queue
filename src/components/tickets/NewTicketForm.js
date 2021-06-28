import { useRef } from 'react';
import Card from '../ui/Card';

import classes from './NewTicketForm.module.css';

function NewTicketForm(props) {

  const priorityInputRef = useRef();
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const dateInputRef = useRef();
  const notesInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredPriority = parseInt(priorityInputRef.current.value);
    const enteredFname = fnameInputRef.current.value;
    const enteredLname = lnameInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    const ticketData = {
      priority: enteredPriority,
      fname: enteredFname,
      lname: enteredLname,
      date: enteredDate,
      notes: enteredNotes
    };

    props.onAddTicket(ticketData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='priority'>Priority</label>
          <input
            type='number'
            required
            id='priority'
            min='1'
            placeholder='1'
            ref={priorityInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' required id='fname' ref={fnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' required id='lname' ref={lnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input type='date' required id='date' ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='notes'>Notes</label>
          <textarea required id='notes' rows='5' ref={notesInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Ticket</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTicketForm;
